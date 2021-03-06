
// Import the core angular services.
import { NgModule } from "@angular/core";

// Import the application components and services.
import { AppViewComponent } from "./app-view.component";
import { SharedModule } from "~/app/shared/shared.module";

// ----------------------------------------------------------------------------------- //
// ----------------------------------------------------------------------------------- //

@NgModule({
	imports: [
		SharedModule
	],
	declarations: [
		AppViewComponent
	]
})
export class AppViewModule {
	// ...
}
