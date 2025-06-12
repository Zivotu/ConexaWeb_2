import i18n from '../i18n'; // Pretpostavljamo da je putanja do vaše i18n instance ovakva
// Prilagodite putanju iznad prema vašoj strukturi projekta.
// Ovo se koristi za prevođenje stringova izvan React komponenti (npr. u običnim JS/TS datotekama).

export interface ModuleInfo {
  id: string;
  title: string;
  path: string;
  color: string;
}

export const modulesList: ModuleInfo[] = [
  { id: 'alarm', title: i18n.t('modulesList.alarm.title', 'Alarm'), path: '/modules/alarm', color: '#fbc02d' },
  { id: 'bulletin-board', title: i18n.t('modulesList.bulletinBoard.title', 'Bulletin Board'), path: '/modules/bulletin-board', color: '#fdc107' },
  { id: 'chat-room', title: i18n.t('modulesList.chatRoom.title', 'Chat Room'), path: '/modules/chat-room', color: '#4baf4f' },
  { id: 'documents', title: i18n.t('modulesList.documents.title', 'Documents'), path: '/modules/documents', color: '#fe9100' },
  { id: 'home-repairs', title: i18n.t('modulesList.homeRepairs.title', 'Home Repairs'), path: '/modules/home-repairs', color: '#f3372b' },
  { id: 'local-posts', title: i18n.t('modulesList.localPosts.title', 'Local Posts'), path: '/modules/local-posts', color: '#9c27b0' },
  { id: 'marketplace', title: i18n.t('modulesList.marketplace.title', 'Marketplace'), path: '/modules/marketplace', color: '#4caf50' },
  { id: 'noise-alerts', title: i18n.t('modulesList.noiseAlerts.title', 'Noise Alerts'), path: '/modules/noise-alerts', color: '#e91e63' },
  { id: 'official-notices', title: i18n.t('modulesList.officialNotices.title', 'Official Notices'), path: '/modules/official-notices', color: '#3f51b5' },
  { id: 'parking-sharing', title: i18n.t('modulesList.parkingSharing.title', 'Parking Sharing'), path: '/modules/parking-sharing', color: '#795548' },
  { id: 'quiz', title: i18n.t('modulesList.quiz.title', 'Quiz'), path: '/modules/quiz', color: '#009688' },
  { id: 'security', title: i18n.t('modulesList.security.title', 'Security'), path: '/modules/security', color: '#607d8b' },
  { id: 'shared-rides', title: i18n.t('modulesList.sharedRides.title', 'Ride Sharing'), path: '/modules/shared-rides', color: '#86be41' },
  { id: 'shared-tasks', title: i18n.t('modulesList.sharedTasks.title', 'Shared Tasks'), path: '/modules/shared-tasks', color: '#8bc34a' },
  { id: 'wise-owl', title: i18n.t('modulesList.wiseOwl.title', 'Wise Owl'), path: '/modules/wise-owl', color: '#ffc107' },
  { id: 'business-networking', title: i18n.t('modulesList.businessNetworking.title', 'Business Networking'), path: '/modules/business-networking', color: '#3f51b5' },
  { id: 'conference-rooms', title: i18n.t('modulesList.conferenceRooms.title', 'Conference Rooms'), path: '/modules/conference-rooms', color: '#9c27b0' },
];
