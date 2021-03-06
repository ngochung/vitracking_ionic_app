import { BrowserModule } from '@angular/platform-browser';
//import { HttpModule } from '@angular/http';
import { NgModule, ErrorHandler } from '@angular/core';

import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';

import { InAppBrowser } from '@ionic-native/in-app-browser';
import { SplashScreen } from '@ionic-native/splash-screen';

import { IonicStorageModule } from '@ionic/storage';

import { ConferenceApp } from './app.component';

import { AboutPage } from '../pages/about/about';
import { PopoverPage } from '../pages/about-popover/about-popover';
import { AccountPage } from '../pages/account/account';
import { LoginPage } from '../pages/login/login';
import { MapPage } from '../pages/map/map';
import { SchedulePage } from '../pages/schedule/schedule';
import { ScheduleFilterPage } from '../pages/schedule-filter/schedule-filter';
import { SessionDetailPage } from '../pages/session-detail/session-detail';
import { SignupPage } from '../pages/signup/signup';
import { SpeakerDetailPage } from '../pages/speaker-detail/speaker-detail';
import { SpeakerListPage } from '../pages/speaker-list/speaker-list';
import { TabsPage } from '../pages/tabs-page/tabs-page';
import { TutorialPage } from '../pages/tutorial/tutorial';
import { SupportPage } from '../pages/support/support';
import { TrackHistoryPage } from '../pages/track-history/track-history';

import { ConferenceData } from '../providers/conference-data';
import { UserData } from '../providers/user-data';

import { HttpModule, Http } from '@angular/http';
import { TranslateModule, TranslateLoader, TranslateService } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { AuthServiceProvider } from '../providers/auth-service/auth-service';

import { AppConfig } from '../lib/config/app-config';
import { ApiProvider } from '../providers/api/api';
import { HttpProvider } from '../providers/http/http';
import { SQLite } from '@ionic-native/sqlite';
import { DbProvider } from '../providers/db/db';
import { DevDataProvider } from '../providers/dev-data';

// import { RequestUtil } from '../lib/util/request-util';

// AoT requires an exported function for factories
export function createTranslateLoader(http:Http) {
    return new TranslateHttpLoader(http, './assets/i18n/', '.json');
}

@NgModule({
    declarations: [
        ConferenceApp,
        AboutPage,
        AccountPage,
        LoginPage,
        MapPage,
        PopoverPage,
        SchedulePage,
        ScheduleFilterPage,
        SessionDetailPage,
        SignupPage,
        SpeakerDetailPage,
        SpeakerListPage,
        TabsPage,
        TutorialPage,
        SupportPage,
        TrackHistoryPage
    ],
    imports: [
        BrowserModule,
        HttpModule,
        TranslateModule.forRoot({
            loader: {
                provide: TranslateLoader,
                useFactory: (createTranslateLoader),
                deps: [Http]
            }
        }),
        IonicModule.forRoot(ConferenceApp, {}, {
            links: [
                {component: TabsPage, name: 'TabsPage', segment: 'tabs-page'},
                {component: SchedulePage, name: 'Schedule', segment: 'schedule'},
                {component: SessionDetailPage, name: 'SessionDetail', segment: 'sessionDetail/:sessionId'},
                {component: ScheduleFilterPage, name: 'ScheduleFilter', segment: 'scheduleFilter'},
                {component: SpeakerListPage, name: 'SpeakerList', segment: 'speakerList'},
                {component: SpeakerDetailPage, name: 'SpeakerDetail', segment: 'speakerDetail/:speakerId'},
                {component: MapPage, name: 'Map', segment: 'map'},
                {component: AboutPage, name: 'About', segment: 'about'},
                {component: TutorialPage, name: 'Tutorial', segment: 'tutorial'},
                {component: SupportPage, name: 'SupportPage', segment: 'support'},
                {component: LoginPage, name: 'LoginPage', segment: 'login'},
                {component: AccountPage, name: 'AccountPage', segment: 'account'},
                {component: SignupPage, name: 'SignupPage', segment: 'signup'},
                {component: TrackHistoryPage, name: 'TrackHistory', segment: 'history'}
            ]
        }),
        IonicStorageModule.forRoot()
    ],
    bootstrap: [IonicApp],
    entryComponents: [
        ConferenceApp,
        AboutPage,
        AccountPage,
        LoginPage,
        MapPage,
        PopoverPage,
        SchedulePage,
        ScheduleFilterPage,
        SessionDetailPage,
        SignupPage,
        SpeakerDetailPage,
        SpeakerListPage,
        TabsPage,
        TutorialPage,
        SupportPage,
        TrackHistoryPage
    ],
    providers: [
        {provide: ErrorHandler, useClass: IonicErrorHandler},
        ConferenceData,
        UserData,
        InAppBrowser,
        SplashScreen,
        TranslateService,
        AuthServiceProvider,
        AppConfig,
        ApiProvider,
        HttpProvider,
        SQLite,
        DbProvider,
    DevDataProvider
    ]
})
export class AppModule {
}
