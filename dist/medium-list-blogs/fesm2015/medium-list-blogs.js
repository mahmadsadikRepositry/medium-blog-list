import { Injectable, ɵɵdefineInjectable, Component, ViewEncapsulation, NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

/**
 * @fileoverview added by tsickle
 * Generated from: lib/medium-list-blogs.service.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class MediumListBlogsService {
    constructor() { }
}
MediumListBlogsService.decorators = [
    { type: Injectable, args: [{
                providedIn: 'root'
            },] }
];
/** @nocollapse */
MediumListBlogsService.ctorParameters = () => [];
/** @nocollapse */ MediumListBlogsService.ngInjectableDef = ɵɵdefineInjectable({ factory: function MediumListBlogsService_Factory() { return new MediumListBlogsService(); }, token: MediumListBlogsService, providedIn: "root" });

/**
 * @fileoverview added by tsickle
 * Generated from: lib/medium-list-blogs.component.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class MediumListBlogsComponent {
    constructor() { }
    /**
     * @return {?}
     */
    ngOnInit() {
    }
}
MediumListBlogsComponent.decorators = [
    { type: Component, args: [{
                selector: 'lib-medium-list-blogs',
                template: `
    <p id="custom">
      medium-list-blogs works!
    </p>
  `,
                encapsulation: ViewEncapsulation.ShadowDom
            }] }
];
/** @nocollapse */
MediumListBlogsComponent.ctorParameters = () => [];

/**
 * @fileoverview added by tsickle
 * Generated from: lib/medium-list-blogs.module.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class MediumListBlogsModule {
}
MediumListBlogsModule.decorators = [
    { type: NgModule, args: [{
                declarations: [MediumListBlogsComponent],
                imports: [
                    BrowserAnimationsModule
                ],
                exports: [MediumListBlogsComponent],
                entryComponents: [MediumListBlogsComponent]
            },] }
];

/**
 * @fileoverview added by tsickle
 * Generated from: public-api.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * Generated from: medium-list-blogs.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

export { MediumListBlogsComponent, MediumListBlogsModule, MediumListBlogsService };
//# sourceMappingURL=medium-list-blogs.js.map
