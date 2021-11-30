import { MyProfile } from './Profile/MyProfile';
// import { OtherProfile } from './Profile/OtherProfile';
import { ProfileEditForm } from './Profile/ProfileEditForm';
import { Login } from './Landing/Login';
import { Register } from './Landing/Register';
import { Donations } from './Donations/Donations';
import { Donation } from './Orders/Donation';
import { Table } from './Orders/Table';


export const ROUTES = [
    {path: '/', exact: true, component: Login},
    {path: '/donations', component: Table},
    {path: '/register', component: Register},
    {path: '/profile/edit', component: ProfileEditForm},
    {path: '/myprofile/', component: MyProfile},
    {path: '/details/:foodDonationID', component: Donation},
    // {path: '/profile/:userID', component: OtherProfile},
    // {path: '/newdonation', component: NewDonation}

];