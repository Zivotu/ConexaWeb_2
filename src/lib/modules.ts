// List of all available modules within the application. Only translation keys
// are stored here so that components can translate titles at render time.

export interface ModuleInfo {
  id: string;
  /** i18next translation key for the module title */
  titleKey: string;
  path: string;
  color: string;
}

export const modulesList: ModuleInfo[] = [
  { id: 'alarm', titleKey: 'modulesList.alarm.title', path: '/modules/alarm', color: '#fbc02d' },
  { id: 'bulletin-board', titleKey: 'modulesList.bulletinBoard.title', path: '/modules/bulletin-board', color: '#fdc107' },
  { id: 'chat-room', titleKey: 'modulesList.chatRoom.title', path: '/modules/chat-room', color: '#4baf4f' },
  { id: 'documents', titleKey: 'modulesList.documents.title', path: '/modules/documents', color: '#fe9100' },
  { id: 'home-repairs', titleKey: 'modulesList.homeRepairs.title', path: '/modules/home-repairs', color: '#f3372b' },
  { id: 'local-posts', titleKey: 'modulesList.localPosts.title', path: '/modules/local-posts', color: '#9c27b0' },
  { id: 'marketplace', titleKey: 'modulesList.marketplace.title', path: '/modules/marketplace', color: '#4caf50' },
  { id: 'noise-alerts', titleKey: 'modulesList.noiseAlerts.title', path: '/modules/noise-alerts', color: '#e91e63' },
  { id: 'official-notices', titleKey: 'modulesList.officialNotices.title', path: '/modules/official-notices', color: '#3f51b5' },
  { id: 'parking-sharing', titleKey: 'modulesList.parkingSharing.title', path: '/modules/parking-sharing', color: '#795548' },
  { id: 'quiz', titleKey: 'modulesList.quiz.title', path: '/modules/quiz', color: '#009688' },
  { id: 'security', titleKey: 'modulesList.security.title', path: '/modules/security', color: '#607d8b' },
  { id: 'shared-rides', titleKey: 'modulesList.sharedRides.title', path: '/modules/shared-rides', color: '#86be41' },
  { id: 'shared-tasks', titleKey: 'modulesList.sharedTasks.title', path: '/modules/shared-tasks', color: '#8bc34a' },
  { id: 'wise-owl', titleKey: 'modulesList.wiseOwl.title', path: '/modules/wise-owl', color: '#ffc107' },
  { id: 'business-networking', titleKey: 'modulesList.businessNetworking.title', path: '/modules/business-networking', color: '#3f51b5' },
  { id: 'conference-rooms', titleKey: 'modulesList.conferenceRooms.title', path: '/modules/conference-rooms', color: '#9c27b0' },
];
