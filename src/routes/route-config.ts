// Centralized route configuration
const ROUTES = {
  HOME: {
    path: '/',
    label: 'Home',
    get: () => '/'
  },
  ABOUT_US: {
    path: '/about-us',
    label: 'About Us',
    get: () => '/about-us'
  },
  OWNER_REGISTER: {
    path: '/owner/register',
    label: 'List Your Car',
    get: () => '/owner/register'
  },
  // Car Routes
  CARS: {
    path: '/cars',
    label: 'Browse Cars',
    get: () => '/cars'
  },
  CAR_DETAIL: {
    path: '/cars/:carId',
    label: 'Car Details',
    get: (carId: string | number) => `/cars/${carId}`
  },
  CAR_CREATE: {
    path: '/cars/create',
    label: 'List a Car',
    get: () => '/cars/create'
  },
  // Auth Routes
  LOGIN: {
    path: '/login',
    label: 'Login',
    get: () => '/login'
  },
  REGISTER: {
    path: '/register',
    label: 'Register',
    get: () => '/register'
  },
  // Dashboard Routes
  OWNER_DASHBOARD: {
    path: '/owner/dashboard',
    label: 'Owner Dashboard',
    get: () => '/owner/dashboard'
  },
  RENTER_DASHBOARD: {
    path: '/renter/dashboard',
    label: 'Renter Dashboard',
    get: () => '/renter/dashboard'
  },
  // Profile Routes
  PROFILE: {
    path: '/profile',
    label: 'My Profile',
    get: () => '/profile'
  },
  // Booking Routes
  BOOKINGS: {
    path: '/bookings',
    label: 'My Bookings',
    get: () => '/bookings'
  },
  BOOKING_DETAIL: {
    path: '/bookings/:bookingId',
    label: 'Booking Details',
    get: (bookingId: string | number) => `/bookings/${bookingId}`
  }
} as const;

type AppRoute = keyof typeof ROUTES;

export {type AppRoute, ROUTES}