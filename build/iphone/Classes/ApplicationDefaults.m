/**
* Appcelerator Titanium Mobile
* This is generated code. Do not modify. Your changes *will* be lost.
* Generated code is Copyright (c) 2009-2011 by Appcelerator, Inc.
* All Rights Reserved.
*/
#import <Foundation/Foundation.h>
#import "TiUtils.h"
#import "ApplicationDefaults.h"
 
@implementation ApplicationDefaults
  
+ (NSMutableDictionary*) copyDefaults
{
    NSMutableDictionary * _property = [[NSMutableDictionary alloc] init];

    [_property setObject:[TiUtils stringValue:@"8TlsaCi0yr45QTGnMAoC8rqyvtTNwhew"] forKey:@"acs-oauth-secret-production"];
    [_property setObject:[TiUtils stringValue:@"zrnTX9ir579Y7ghGrxTekLgin6L9L71H"] forKey:@"acs-oauth-key-production"];
    [_property setObject:[TiUtils stringValue:@"urz34ECm6N0FTCcw3k29RU7FEOMDml5e"] forKey:@"acs-api-key-production"];
    [_property setObject:[TiUtils stringValue:@"2j9dH1rfIOvUXQSDC1O6ZpuB5QVsOoba"] forKey:@"acs-oauth-secret-development"];
    [_property setObject:[TiUtils stringValue:@"Zsk3O9XjIyRNfjP7tVAgLB7S1863z1pc"] forKey:@"acs-oauth-key-development"];
    [_property setObject:[TiUtils stringValue:@"apQRPI9yqaSiRx4xGbHk9pgcUnO8IRYC"] forKey:@"acs-api-key-development"];
    [_property setObject:[TiUtils stringValue:@"system"] forKey:@"ti.ui.defaultunit"];

    return _property;
}
@end
