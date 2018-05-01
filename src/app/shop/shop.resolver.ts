import { Injectable } from '@angular/core';
import {
	ActivatedRouteSnapshot,
	Resolve,
	RouterStateSnapshot
} from '@angular/router';

@Injectable()
export class ShopResolver implements Resolve<string> {

	resolve(
		route: ActivatedRouteSnapshot,
		state: RouterStateSnapshot
	): string {
		return route.params.category;
	}
}
