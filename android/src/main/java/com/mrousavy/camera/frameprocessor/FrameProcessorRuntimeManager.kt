package com.mrousavy.camera.frameprocessor

import android.util.Log
import android.view.View
import androidx.annotation.Keep
import com.facebook.jni.HybridData
import com.facebook.proguard.annotations.DoNotStrip
import com.facebook.react.bridge.ReactApplicationContext
import com.facebook.react.turbomodule.core.CallInvokerHolderImpl
import com.facebook.react.uimanager.util.ReactFindViewUtil
import com.mrousavy.camera.CameraView
import com.mrousavy.camera.ViewNotFoundError
import com.swmansion.reanimated.Scheduler
import java.lang.ref.WeakReference
import java.util.concurrent.ExecutorService

@Suppress("KotlinJniMissingFunction") // I use fbjni, Android Studio is not smart enough to realize that.
class FrameProcessorRuntimeManager(context: ReactApplicationContext, frameProcessorThread: ExecutorService) {
  companion object {
    const val TAG = "FrameProcessorRuntime"
    val Plugins: ArrayList<FrameProcessorPlugin> = ArrayList()

    init {
      System.loadLibrary("reanimated")
      System.loadLibrary("VisionCamera")
    }
  }

  @DoNotStrip
  private var mHybridData: HybridData
  private var mContext: WeakReference<ReactApplicationContext>
  private var mScheduler: VisionCameraScheduler

  init {
    val holder = context.catalystInstance.jsCallInvokerHolder as CallInvokerHolderImpl
    mScheduler = VisionCameraScheduler(frameProcessorThread)
    mContext = WeakReference(context)
    mHybridData = initHybrid(context.javaScriptContextHolder.get(), holder, mScheduler)
    initializeRuntime()

    Log.i(TAG, "Installing Frame Processor Plugins...")
    Plugins.forEach { plugin ->
      registerPlugin(plugin)
    }
    Log.i(TAG, "Successfully installed ${Plugins.count()} Frame Processor Plugins!")
  }

  @Suppress("unused")
  @DoNotStrip
  @Keep
  fun findCameraViewById(viewTag: String): CameraView {
    Log.d(TAG, "Finding view \"$viewTag\"...")
    val activity = mContext.get()?.currentActivity ?: throw ViewNotFoundError(viewTag)
    val rootView = activity.window.decorView.findViewById<View>(android.R.id.content)
    val view = ReactFindViewUtil.findView(rootView, viewTag)
    return view as? CameraView ?: throw ViewNotFoundError(viewTag)
  }

  // private C++ funcs
  private external fun initHybrid(
    jsContext: Long,
    jsCallInvokerHolder: CallInvokerHolderImpl,
    scheduler: VisionCameraScheduler
  ): HybridData
  private external fun initializeRuntime()
  private external fun registerPlugin(plugin: FrameProcessorPlugin)

  // public C++ funcs
  external fun installJSIBindings()
}
