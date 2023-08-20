#import "AppDelegate.h"

#import <React/RCTBundleURLProvider.h>
#import <GoogleMaps/GoogleMaps.h>
@import GooglePlaces;
@import GoogleMaps;

@implementation AppDelegate

- (BOOL)application:(UIApplication *)application didFinishLaunchingWithOptions:(NSDictionary *)launchOptions
{
  [GMSPlacesClient provideAPIKey:@"AIzaSyC1cC7gG0SKu8ZVC4N5T89u9QfVQVMM_ZY"];
  [GMSServices provideAPIKey:@"AIzaSyC1cC7gG0SKu8ZVC4N5T89u9QfVQVMM_ZY"];
  
  self.moduleName = @"FetchTechnology";
  // You can add your custom initial props in the dictionary below.
  // They will be passed down to the ViewController used by React Native.
  self.initialProps = @{};

  return [super application:application didFinishLaunchingWithOptions:launchOptions];
}

- (NSURL *)sourceURLForBridge:(RCTBridge *)bridge
{
#if DEBUG
  return [[RCTBundleURLProvider sharedSettings] jsBundleURLForBundleRoot:@"index"];
#else
  return [[NSBundle mainBundle] URLForResource:@"main" withExtension:@"jsbundle"];
#endif
}

@end
