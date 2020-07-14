(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core'), require('@angular/platform-browser/animations')) :
    typeof define === 'function' && define.amd ? define('medium-list-blogs', ['exports', '@angular/core', '@angular/platform-browser/animations'], factory) :
    (global = global || self, factory(global['medium-list-blogs'] = {}, global.ng.core, global.ng.platformBrowser.animations));
}(this, (function (exports, core, animations) { 'use strict';

    /**
     * @fileoverview added by tsickle
     * Generated from: lib/medium-list-blogs.service.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var MediumListBlogsService = /** @class */ (function () {
        function MediumListBlogsService() {
        }
        MediumListBlogsService.decorators = [
            { type: core.Injectable, args: [{
                        providedIn: 'root'
                    },] }
        ];
        /** @nocollapse */
        MediumListBlogsService.ctorParameters = function () { return []; };
        /** @nocollapse */ MediumListBlogsService.ngInjectableDef = core.ɵɵdefineInjectable({ factory: function MediumListBlogsService_Factory() { return new MediumListBlogsService(); }, token: MediumListBlogsService, providedIn: "root" });
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
            { type: core.Component, args: [{
                        selector: 'lib-medium-list-blogs',
                        template: "\n    <p id=\"custom\">\n      medium-list-blogs works!\n    </p>\n  ",
                        encapsulation: core.ViewEncapsulation.ShadowDom
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
            { type: core.NgModule, args: [{
                        declarations: [MediumListBlogsComponent],
                        imports: [
                            animations.BrowserAnimationsModule
                        ],
                        exports: [MediumListBlogsComponent],
                        entryComponents: [MediumListBlogsComponent]
                    },] }
        ];
        return MediumListBlogsModule;
    }());

    exports.MediumListBlogsComponent = MediumListBlogsComponent;
    exports.MediumListBlogsModule = MediumListBlogsModule;
    exports.MediumListBlogsService = MediumListBlogsService;

    Object.defineProperty(exports, '__esModule', { value: true });

})));
//# sourceMappingURL=medium-list-blogs.umd.js.map
