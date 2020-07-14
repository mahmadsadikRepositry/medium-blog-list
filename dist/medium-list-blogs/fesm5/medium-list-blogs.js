import { Injectable, ɵɵdefineInjectable, Component, ViewEncapsulation, NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

/**
 * @fileoverview added by tsickle
 * Generated from: lib/medium-list-blogs.service.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var MediumListBlogsService = /** @class */ (function () {
    function MediumListBlogsService() {
    }
    MediumListBlogsService.decorators = [
        { type: Injectable, args: [{
                    providedIn: 'root'
                },] }
    ];
    /** @nocollapse */
    MediumListBlogsService.ctorParameters = function () { return []; };
    /** @nocollapse */ MediumListBlogsService.ngInjectableDef = ɵɵdefineInjectable({ factory: function MediumListBlogsService_Factory() { return new MediumListBlogsService(); }, token: MediumListBlogsService, providedIn: "root" });
    return MediumListBlogsService;
}());

/**
 * @fileoverview added by tsickle
 * Generated from: lib/medium-list-blogs.component.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var MediumListBlogsComponent = /** @class */ (function () {
    function MediumListBlogsComponent() {
    }
    /**
     * @return {?}
     */
    MediumListBlogsComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
    };
    MediumListBlogsComponent.decorators = [
        { type: Component, args: [{
                    selector: 'lib-medium-list-blogs',
                    template: "\n    <p id=\"custom\">\n      medium-list-blogs works!\n    </p>\n  ",
                    encapsulation: ViewEncapsulation.ShadowDom
                }] }
    ];
    /** @nocollapse */
    MediumListBlogsComponent.ctorParameters = function () { return []; };
    return MediumListBlogsComponent;
}());

/**
 * @fileoverview added by tsickle
 * Generated from: lib/medium-list-blogs.module.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var MediumListBlogsModule = /** @class */ (function () {
    function MediumListBlogsModule() {
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
    return MediumListBlogsModule;
}());

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
