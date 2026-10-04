import { Capacitor } from '@capacitor/core'
import { Browser } from '@capacitor/browser'
import { Share } from '@capacitor/share'
import { Haptics, ImpactStyle } from '@capacitor/haptics'
import { StatusBar, Style } from '@capacitor/status-bar'
import { SplashScreen } from '@capacitor/splash-screen'

export const isNative = Capacitor.isNativePlatform()

export async function initNativeShell(): Promise<void> {
  if (!isNative) return
  try {
    await StatusBar.setStyle({ style: Style.Dark })
    await StatusBar.setBackgroundColor({ color: '#0d2818' })
    await SplashScreen.hide()
  } catch {
    /* plugins optional on web */
  }
}

export async function hapticTap(): Promise<void> {
  if (!isNative) return
  try {
    await Haptics.impact({ style: ImpactStyle.Light })
  } catch {
    /* ignore */
  }
}

export async function openExternalUrl(url: string): Promise<void> {
  if (isNative) {
    await Browser.open({ url })
  } else {
    window.open(url, '_blank', 'noopener,noreferrer')
  }
}

export async function shareProduct(title: string, url: string): Promise<void> {
  if (isNative) {
    await Share.share({ title, text: title, url })
  } else if (navigator.share) {
    await navigator.share({ title, url })
  } else {
    await navigator.clipboard.writeText(url)
  }
}
