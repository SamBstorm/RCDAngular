import { CanActivateFn } from "@angular/router";

export const authenticationGuard : CanActivateFn = () => {
    return (sessionStorage.getItem('currentUser') != null );
};