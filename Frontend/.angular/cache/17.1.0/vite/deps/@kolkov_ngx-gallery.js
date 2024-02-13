import {
  animate,
  state,
  style,
  transition,
  trigger
} from "./chunk-ENTTAO4C.js";
import {
  DomSanitizer,
  HAMMER_GESTURE_CONFIG,
  HammerGestureConfig
} from "./chunk-Y3ZGFIMU.js";
import "./chunk-GDUF3G5X.js";
import {
  CommonModule,
  NgClass,
  NgForOf,
  NgIf
} from "./chunk-UXZHDRSL.js";
import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  ElementRef,
  EventEmitter,
  HostBinding,
  HostListener,
  Injectable,
  Input,
  NgModule,
  Output,
  Renderer2,
  ViewChild,
  ViewEncapsulation$1,
  setClassMetadata,
  ɵɵNgOnChangesFeature,
  ɵɵProvidersFeature,
  ɵɵadvance,
  ɵɵattribute,
  ɵɵclassMapInterpolate1,
  ɵɵclassMapInterpolate2,
  ɵɵclassProp,
  ɵɵdefineComponent,
  ɵɵdefineInjectable,
  ɵɵdefineInjector,
  ɵɵdefineNgModule,
  ɵɵdirectiveInject,
  ɵɵelement,
  ɵɵelementContainerEnd,
  ɵɵelementContainerStart,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵgetCurrentView,
  ɵɵgetInheritedFactory,
  ɵɵinject,
  ɵɵlistener,
  ɵɵloadQuery,
  ɵɵnextContext,
  ɵɵproperty,
  ɵɵpropertyInterpolate,
  ɵɵpureFunction0,
  ɵɵpureFunction1,
  ɵɵpureFunction2,
  ɵɵqueryRefresh,
  ɵɵresetView,
  ɵɵresolveWindow,
  ɵɵrestoreView,
  ɵɵsanitizeHtml,
  ɵɵsanitizeUrl,
  ɵɵstyleProp,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate1,
  ɵɵviewQuery
} from "./chunk-54WH4Z7C.js";
import "./chunk-JARNIZQG.js";
import "./chunk-QZVQJTAQ.js";
import "./chunk-ZME6T3CW.js";
import "./chunk-WKYGNSYM.js";

// node_modules/@kolkov/ngx-gallery/fesm2020/kolkov-ngx-gallery.mjs
var _c0 = (a0) => ({
  "ngx-gallery-active": a0
});
function NgxGalleryBulletsComponent_div_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "div", 1);
    ɵɵlistener("click", function NgxGalleryBulletsComponent_div_0_Template_div_click_0_listener($event) {
      const restoredCtx = ɵɵrestoreView(_r4);
      const i_r2 = restoredCtx.index;
      const ctx_r3 = ɵɵnextContext();
      return ɵɵresetView(ctx_r3.handleChange($event, i_r2));
    });
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const i_r2 = ctx.index;
    const ctx_r0 = ɵɵnextContext();
    ɵɵproperty("ngClass", ɵɵpureFunction1(1, _c0, i_r2 === ctx_r0.active));
  }
}
var _c1 = ["previewImage"];
function NgxGalleryPreviewComponent_ngx_gallery_arrows_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r13 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "ngx-gallery-arrows", 16);
    ɵɵlistener("prevClick", function NgxGalleryPreviewComponent_ngx_gallery_arrows_0_Template_ngx_gallery_arrows_prevClick_0_listener() {
      ɵɵrestoreView(_r13);
      const ctx_r12 = ɵɵnextContext();
      return ɵɵresetView(ctx_r12.showPrev());
    })("nextClick", function NgxGalleryPreviewComponent_ngx_gallery_arrows_0_Template_ngx_gallery_arrows_nextClick_0_listener() {
      ɵɵrestoreView(_r13);
      const ctx_r14 = ɵɵnextContext();
      return ɵɵresetView(ctx_r14.showNext());
    });
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = ɵɵnextContext();
    ɵɵproperty("prevDisabled", !ctx_r0.canShowPrev())("nextDisabled", !ctx_r0.canShowNext())("arrowPrevIcon", ctx_r0.arrowPrevIcon)("arrowNextIcon", ctx_r0.arrowNextIcon);
  }
}
function NgxGalleryPreviewComponent_ngx_gallery_action_3_Template(rf, ctx) {
  if (rf & 1) {
    const _r17 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "ngx-gallery-action", 17);
    ɵɵlistener("closeClick", function NgxGalleryPreviewComponent_ngx_gallery_action_3_Template_ngx_gallery_action_closeClick_0_listener($event) {
      const restoredCtx = ɵɵrestoreView(_r17);
      const action_r15 = restoredCtx.$implicit;
      const ctx_r16 = ɵɵnextContext();
      return ɵɵresetView(action_r15.onClick($event, ctx_r16.index));
    });
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const action_r15 = ctx.$implicit;
    ɵɵproperty("icon", action_r15.icon)("disabled", action_r15.disabled)("titleText", action_r15.titleText);
  }
}
function NgxGalleryPreviewComponent_a_4_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "a", 18);
    ɵɵelement(1, "i");
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = ɵɵnextContext();
    ɵɵproperty("href", ctx_r2.src, ɵɵsanitizeUrl);
    ɵɵadvance();
    ɵɵclassMapInterpolate1("ngx-gallery-icon-content ", ctx_r2.downloadIcon, "");
  }
}
function NgxGalleryPreviewComponent_ngx_gallery_action_5_Template(rf, ctx) {
  if (rf & 1) {
    const _r19 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "ngx-gallery-action", 19);
    ɵɵlistener("closeClick", function NgxGalleryPreviewComponent_ngx_gallery_action_5_Template_ngx_gallery_action_closeClick_0_listener() {
      ɵɵrestoreView(_r19);
      const ctx_r18 = ɵɵnextContext();
      return ɵɵresetView(ctx_r18.zoomOut());
    });
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const ctx_r3 = ɵɵnextContext();
    ɵɵproperty("icon", ctx_r3.zoomOutIcon)("disabled", !ctx_r3.canZoomOut());
  }
}
function NgxGalleryPreviewComponent_ngx_gallery_action_6_Template(rf, ctx) {
  if (rf & 1) {
    const _r21 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "ngx-gallery-action", 19);
    ɵɵlistener("closeClick", function NgxGalleryPreviewComponent_ngx_gallery_action_6_Template_ngx_gallery_action_closeClick_0_listener() {
      ɵɵrestoreView(_r21);
      const ctx_r20 = ɵɵnextContext();
      return ɵɵresetView(ctx_r20.zoomIn());
    });
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const ctx_r4 = ɵɵnextContext();
    ɵɵproperty("icon", ctx_r4.zoomInIcon)("disabled", !ctx_r4.canZoomIn());
  }
}
function NgxGalleryPreviewComponent_ngx_gallery_action_7_Template(rf, ctx) {
  if (rf & 1) {
    const _r23 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "ngx-gallery-action", 7);
    ɵɵlistener("closeClick", function NgxGalleryPreviewComponent_ngx_gallery_action_7_Template_ngx_gallery_action_closeClick_0_listener() {
      ɵɵrestoreView(_r23);
      const ctx_r22 = ɵɵnextContext();
      return ɵɵresetView(ctx_r22.rotateLeft());
    });
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const ctx_r5 = ɵɵnextContext();
    ɵɵproperty("icon", ctx_r5.rotateLeftIcon);
  }
}
function NgxGalleryPreviewComponent_ngx_gallery_action_8_Template(rf, ctx) {
  if (rf & 1) {
    const _r25 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "ngx-gallery-action", 7);
    ɵɵlistener("closeClick", function NgxGalleryPreviewComponent_ngx_gallery_action_8_Template_ngx_gallery_action_closeClick_0_listener() {
      ɵɵrestoreView(_r25);
      const ctx_r24 = ɵɵnextContext();
      return ɵɵresetView(ctx_r24.rotateRight());
    });
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const ctx_r6 = ɵɵnextContext();
    ɵɵproperty("icon", ctx_r6.rotateRightIcon);
  }
}
function NgxGalleryPreviewComponent_ngx_gallery_action_9_Template(rf, ctx) {
  if (rf & 1) {
    const _r27 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "ngx-gallery-action", 7);
    ɵɵlistener("closeClick", function NgxGalleryPreviewComponent_ngx_gallery_action_9_Template_ngx_gallery_action_closeClick_0_listener() {
      ɵɵrestoreView(_r27);
      const ctx_r26 = ɵɵnextContext();
      return ɵɵresetView(ctx_r26.manageFullscreen());
    });
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const ctx_r7 = ɵɵnextContext();
    ɵɵproperty("icon", "ngx-gallery-fullscreen " + ctx_r7.fullscreenIcon);
  }
}
function NgxGalleryPreviewComponent_img_15_Template(rf, ctx) {
  if (rf & 1) {
    const _r31 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "img", 20, 21);
    ɵɵlistener("click", function NgxGalleryPreviewComponent_img_15_Template_img_click_0_listener($event) {
      return $event.stopPropagation();
    })("mouseenter", function NgxGalleryPreviewComponent_img_15_Template_img_mouseenter_0_listener() {
      ɵɵrestoreView(_r31);
      const ctx_r30 = ɵɵnextContext();
      return ɵɵresetView(ctx_r30.imageMouseEnter());
    })("mouseleave", function NgxGalleryPreviewComponent_img_15_Template_img_mouseleave_0_listener() {
      ɵɵrestoreView(_r31);
      const ctx_r32 = ɵɵnextContext();
      return ɵɵresetView(ctx_r32.imageMouseLeave());
    })("mousedown", function NgxGalleryPreviewComponent_img_15_Template_img_mousedown_0_listener($event) {
      ɵɵrestoreView(_r31);
      const ctx_r33 = ɵɵnextContext();
      return ɵɵresetView(ctx_r33.mouseDownHandler($event));
    })("touchstart", function NgxGalleryPreviewComponent_img_15_Template_img_touchstart_0_listener($event) {
      ɵɵrestoreView(_r31);
      const ctx_r34 = ɵɵnextContext();
      return ɵɵresetView(ctx_r34.mouseDownHandler($event));
    });
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const ctx_r8 = ɵɵnextContext();
    ɵɵstyleProp("transform", ctx_r8.getTransform())("left", ctx_r8.positionLeft + "px")("top", ctx_r8.positionTop + "px");
    ɵɵclassProp("ngx-gallery-active", !ctx_r8.loading)("animation", ctx_r8.animation)("ngx-gallery-grab", ctx_r8.canDragOnZoom());
    ɵɵproperty("src", ctx_r8.src, ɵɵsanitizeUrl);
  }
}
function NgxGalleryPreviewComponent_video_16_Template(rf, ctx) {
  if (rf & 1) {
    const _r38 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "video", 22, 21);
    ɵɵlistener("click", function NgxGalleryPreviewComponent_video_16_Template_video_click_0_listener($event) {
      return $event.stopPropagation();
    })("mouseenter", function NgxGalleryPreviewComponent_video_16_Template_video_mouseenter_0_listener() {
      ɵɵrestoreView(_r38);
      const ctx_r37 = ɵɵnextContext();
      return ɵɵresetView(ctx_r37.imageMouseEnter());
    })("mouseleave", function NgxGalleryPreviewComponent_video_16_Template_video_mouseleave_0_listener() {
      ɵɵrestoreView(_r38);
      const ctx_r39 = ɵɵnextContext();
      return ɵɵresetView(ctx_r39.imageMouseLeave());
    })("mousedown", function NgxGalleryPreviewComponent_video_16_Template_video_mousedown_0_listener($event) {
      ɵɵrestoreView(_r38);
      const ctx_r40 = ɵɵnextContext();
      return ɵɵresetView(ctx_r40.mouseDownHandler($event));
    })("touchstart", function NgxGalleryPreviewComponent_video_16_Template_video_touchstart_0_listener($event) {
      ɵɵrestoreView(_r38);
      const ctx_r41 = ɵɵnextContext();
      return ɵɵresetView(ctx_r41.mouseDownHandler($event));
    });
    ɵɵelement(2, "source", 23);
    ɵɵtext(3, " Your browser does not support the video tag. ");
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const ctx_r9 = ɵɵnextContext();
    ɵɵstyleProp("transform", ctx_r9.getTransform())("left", ctx_r9.positionLeft + "px")("top", ctx_r9.positionTop + "px");
    ɵɵclassProp("ngx-gallery-active", !ctx_r9.loading)("animation", ctx_r9.animation)("ngx-gallery-grab", ctx_r9.canDragOnZoom());
    ɵɵadvance(2);
    ɵɵproperty("src", ctx_r9.src, ɵɵsanitizeUrl);
  }
}
function NgxGalleryPreviewComponent_ngx_gallery_bullets_17_Template(rf, ctx) {
  if (rf & 1) {
    const _r43 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "ngx-gallery-bullets", 24);
    ɵɵlistener("bulletChange", function NgxGalleryPreviewComponent_ngx_gallery_bullets_17_Template_ngx_gallery_bullets_bulletChange_0_listener($event) {
      ɵɵrestoreView(_r43);
      const ctx_r42 = ɵɵnextContext();
      return ɵɵresetView(ctx_r42.showAtIndex($event));
    });
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const ctx_r10 = ɵɵnextContext();
    ɵɵproperty("count", ctx_r10.images.length)("active", ctx_r10.index);
  }
}
function NgxGalleryPreviewComponent_div_18_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "div", 25);
    ɵɵlistener("click", function NgxGalleryPreviewComponent_div_18_Template_div_click_0_listener($event) {
      return $event.stopPropagation();
    });
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const ctx_r11 = ɵɵnextContext();
    ɵɵproperty("innerHTML", ctx_r11.description, ɵɵsanitizeHtml);
  }
}
function NgxGalleryImageComponent_ng_container_1_div_1_ngx_gallery_action_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r12 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "ngx-gallery-action", 8);
    ɵɵlistener("closeClick", function NgxGalleryImageComponent_ng_container_1_div_1_ngx_gallery_action_2_Template_ngx_gallery_action_closeClick_0_listener($event) {
      const restoredCtx = ɵɵrestoreView(_r12);
      const action_r9 = restoredCtx.$implicit;
      const image_r3 = ɵɵnextContext(2).$implicit;
      return ɵɵresetView(action_r9.onClick($event, image_r3.index));
    });
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const action_r9 = ctx.$implicit;
    ɵɵproperty("icon", action_r9.icon)("disabled", action_r9.disabled)("titleText", action_r9.titleText);
  }
}
function NgxGalleryImageComponent_ng_container_1_div_1_div_3_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "div", 9);
    ɵɵlistener("click", function NgxGalleryImageComponent_ng_container_1_div_1_div_3_Template_div_click_0_listener($event) {
      return $event.stopPropagation();
    });
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const image_r3 = ɵɵnextContext(2).$implicit;
    const ctx_r8 = ɵɵnextContext();
    ɵɵproperty("innerHTML", ctx_r8.descriptions[image_r3.index], ɵɵsanitizeHtml);
  }
}
var _c2 = (a0) => ({
  "ngx-gallery-clickable": a0
});
function NgxGalleryImageComponent_ng_container_1_div_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r17 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "div", 4);
    ɵɵlistener("click", function NgxGalleryImageComponent_ng_container_1_div_1_Template_div_click_0_listener($event) {
      ɵɵrestoreView(_r17);
      const image_r3 = ɵɵnextContext().$implicit;
      const ctx_r15 = ɵɵnextContext();
      return ɵɵresetView(ctx_r15.handleClick($event, image_r3.index));
    })("@animation.start", function NgxGalleryImageComponent_ng_container_1_div_1_Template_div_animation_animation_start_0_listener($event) {
      ɵɵrestoreView(_r17);
      const ctx_r18 = ɵɵnextContext(2);
      return ɵɵresetView(ctx_r18.onStart($event));
    })("@animation.done", function NgxGalleryImageComponent_ng_container_1_div_1_Template_div_animation_animation_done_0_listener($event) {
      ɵɵrestoreView(_r17);
      const ctx_r19 = ɵɵnextContext(2);
      return ɵɵresetView(ctx_r19.onDone($event));
    });
    ɵɵelementStart(1, "div", 5);
    ɵɵtemplate(2, NgxGalleryImageComponent_ng_container_1_div_1_ngx_gallery_action_2_Template, 1, 3, "ngx-gallery-action", 6);
    ɵɵelementEnd();
    ɵɵtemplate(3, NgxGalleryImageComponent_ng_container_1_div_1_div_3_Template, 1, 1, "div", 7);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const image_r3 = ɵɵnextContext().$implicit;
    const ctx_r5 = ɵɵnextContext();
    ɵɵstyleProp("background-image", ctx_r5.getSafeUrl(image_r3.src));
    ɵɵproperty("ngClass", ɵɵpureFunction1(6, _c2, ctx_r5.clickable))("@animation", ctx_r5.action);
    ɵɵadvance(2);
    ɵɵproperty("ngForOf", ctx_r5.actions);
    ɵɵadvance();
    ɵɵproperty("ngIf", ctx_r5.showDescription && ctx_r5.descriptions[image_r3.index]);
  }
}
function NgxGalleryImageComponent_ng_container_1_div_2_ngx_gallery_action_5_Template(rf, ctx) {
  if (rf & 1) {
    const _r26 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "ngx-gallery-action", 8);
    ɵɵlistener("closeClick", function NgxGalleryImageComponent_ng_container_1_div_2_ngx_gallery_action_5_Template_ngx_gallery_action_closeClick_0_listener($event) {
      const restoredCtx = ɵɵrestoreView(_r26);
      const action_r23 = restoredCtx.$implicit;
      const image_r3 = ɵɵnextContext(2).$implicit;
      return ɵɵresetView(action_r23.onClick($event, image_r3.index));
    });
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const action_r23 = ctx.$implicit;
    ɵɵproperty("icon", action_r23.icon)("disabled", action_r23.disabled)("titleText", action_r23.titleText);
  }
}
function NgxGalleryImageComponent_ng_container_1_div_2_div_6_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "div", 9);
    ɵɵlistener("click", function NgxGalleryImageComponent_ng_container_1_div_2_div_6_Template_div_click_0_listener($event) {
      return $event.stopPropagation();
    });
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const image_r3 = ɵɵnextContext(2).$implicit;
    const ctx_r22 = ɵɵnextContext();
    ɵɵproperty("innerHTML", ctx_r22.descriptions[image_r3.index], ɵɵsanitizeHtml);
  }
}
function NgxGalleryImageComponent_ng_container_1_div_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r31 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "div", 4);
    ɵɵlistener("click", function NgxGalleryImageComponent_ng_container_1_div_2_Template_div_click_0_listener($event) {
      ɵɵrestoreView(_r31);
      const image_r3 = ɵɵnextContext().$implicit;
      const ctx_r29 = ɵɵnextContext();
      return ɵɵresetView(ctx_r29.handleClick($event, image_r3.index));
    })("@animation.start", function NgxGalleryImageComponent_ng_container_1_div_2_Template_div_animation_animation_start_0_listener($event) {
      ɵɵrestoreView(_r31);
      const ctx_r32 = ɵɵnextContext(2);
      return ɵɵresetView(ctx_r32.onStart($event));
    })("@animation.done", function NgxGalleryImageComponent_ng_container_1_div_2_Template_div_animation_animation_done_0_listener($event) {
      ɵɵrestoreView(_r31);
      const ctx_r33 = ɵɵnextContext(2);
      return ɵɵresetView(ctx_r33.onDone($event));
    });
    ɵɵelementStart(1, "video", 10);
    ɵɵelement(2, "source", 11);
    ɵɵtext(3, " Your browser does not support the video tag. ");
    ɵɵelementEnd();
    ɵɵelementStart(4, "div", 5);
    ɵɵtemplate(5, NgxGalleryImageComponent_ng_container_1_div_2_ngx_gallery_action_5_Template, 1, 3, "ngx-gallery-action", 6);
    ɵɵelementEnd();
    ɵɵtemplate(6, NgxGalleryImageComponent_ng_container_1_div_2_div_6_Template, 1, 1, "div", 7);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const image_r3 = ɵɵnextContext().$implicit;
    const ctx_r6 = ɵɵnextContext();
    ɵɵstyleProp("background-image", ctx_r6.getSafeUrl(image_r3.src));
    ɵɵproperty("ngClass", ɵɵpureFunction1(7, _c2, ctx_r6.clickable))("@animation", ctx_r6.action);
    ɵɵadvance(2);
    ɵɵproperty("src", image_r3.src, ɵɵsanitizeUrl);
    ɵɵadvance(3);
    ɵɵproperty("ngForOf", ctx_r6.actions);
    ɵɵadvance();
    ɵɵproperty("ngIf", ctx_r6.showDescription && ctx_r6.descriptions[image_r3.index]);
  }
}
function NgxGalleryImageComponent_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainerStart(0);
    ɵɵtemplate(1, NgxGalleryImageComponent_ng_container_1_div_1_Template, 4, 8, "div", 3)(2, NgxGalleryImageComponent_ng_container_1_div_2_Template, 7, 9, "div", 3);
    ɵɵelementContainerEnd();
  }
  if (rf & 2) {
    const image_r3 = ctx.$implicit;
    const ctx_r0 = ɵɵnextContext();
    ɵɵadvance();
    ɵɵproperty("ngIf", image_r3.type === "image" && image_r3.index === ctx_r0._selectedIndex);
    ɵɵadvance();
    ɵɵproperty("ngIf", image_r3.type === "video" && image_r3.index === ctx_r0._selectedIndex);
  }
}
function NgxGalleryImageComponent_ngx_gallery_bullets_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r36 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "ngx-gallery-bullets", 12);
    ɵɵlistener("bulletChange", function NgxGalleryImageComponent_ngx_gallery_bullets_2_Template_ngx_gallery_bullets_bulletChange_0_listener($event) {
      ɵɵrestoreView(_r36);
      const ctx_r35 = ɵɵnextContext();
      return ɵɵresetView(ctx_r35.show($event));
    });
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = ɵɵnextContext();
    ɵɵproperty("count", ctx_r1.images.length)("active", ctx_r1._selectedIndex);
  }
}
function NgxGalleryImageComponent_ngx_gallery_arrows_3_Template(rf, ctx) {
  if (rf & 1) {
    const _r38 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "ngx-gallery-arrows", 13);
    ɵɵlistener("prevClick", function NgxGalleryImageComponent_ngx_gallery_arrows_3_Template_ngx_gallery_arrows_prevClick_0_listener() {
      ɵɵrestoreView(_r38);
      const ctx_r37 = ɵɵnextContext();
      return ɵɵresetView(ctx_r37.showPrev());
    })("nextClick", function NgxGalleryImageComponent_ngx_gallery_arrows_3_Template_ngx_gallery_arrows_nextClick_0_listener() {
      ɵɵrestoreView(_r38);
      const ctx_r39 = ɵɵnextContext();
      return ɵɵresetView(ctx_r39.showNext());
    });
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = ɵɵnextContext();
    ɵɵclassMapInterpolate1("ngx-gallery-image-size-", ctx_r2.size, "");
    ɵɵproperty("prevDisabled", !ctx_r2.canShowPrev())("nextDisabled", !ctx_r2.canShowNext())("arrowPrevIcon", ctx_r2.arrowPrevIcon)("arrowNextIcon", ctx_r2.arrowNextIcon);
  }
}
var _c3 = (a0, a1) => ({
  "ngx-gallery-active": a0,
  "ngx-gallery-clickable": a1
});
function NgxGalleryThumbnailsComponent_a_2_div_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelement(0, "div", 9);
  }
  if (rf & 2) {
    const ctx_r8 = ɵɵnextContext();
    const image_r2 = ctx_r8.$implicit;
    const i_r3 = ctx_r8.index;
    const ctx_r4 = ɵɵnextContext();
    ɵɵstyleProp("background-image", ctx_r4.getSafeUrl(image_r2));
    ɵɵproperty("ngClass", ɵɵpureFunction2(3, _c3, i_r3 === ctx_r4.selectedIndex, ctx_r4.clickable));
  }
}
function NgxGalleryThumbnailsComponent_a_2_div_2_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "div", 10)(1, "video", 11);
    ɵɵelement(2, "source", 12);
    ɵɵtext(3, " Your browser does not support the video tag. ");
    ɵɵelementEnd()();
  }
  if (rf & 2) {
    const ctx_r9 = ɵɵnextContext();
    const i_r3 = ctx_r9.index;
    const image_r2 = ctx_r9.$implicit;
    const ctx_r5 = ɵɵnextContext();
    ɵɵadvance();
    ɵɵproperty("ngClass", ɵɵpureFunction2(2, _c3, i_r3 === ctx_r5.selectedIndex, ctx_r5.clickable));
    ɵɵadvance();
    ɵɵproperty("src", image_r2, ɵɵsanitizeUrl);
  }
}
function NgxGalleryThumbnailsComponent_a_2_ngx_gallery_action_4_Template(rf, ctx) {
  if (rf & 1) {
    const _r13 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "ngx-gallery-action", 13);
    ɵɵlistener("closeClick", function NgxGalleryThumbnailsComponent_a_2_ngx_gallery_action_4_Template_ngx_gallery_action_closeClick_0_listener($event) {
      const restoredCtx = ɵɵrestoreView(_r13);
      const action_r10 = restoredCtx.$implicit;
      const i_r3 = ɵɵnextContext().index;
      return ɵɵresetView(action_r10.onClick($event, i_r3));
    });
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const action_r10 = ctx.$implicit;
    ɵɵproperty("icon", action_r10.icon)("disabled", action_r10.disabled)("titleText", action_r10.titleText);
  }
}
function NgxGalleryThumbnailsComponent_a_2_div_5_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "div", 14)(1, "span", 15);
    ɵɵtext(2);
    ɵɵelementEnd()();
  }
  if (rf & 2) {
    const ctx_r7 = ɵɵnextContext(2);
    ɵɵadvance(2);
    ɵɵtextInterpolate1("+", ctx_r7.remainingCountValue, "");
  }
}
function NgxGalleryThumbnailsComponent_a_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r15 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "a", 3);
    ɵɵlistener("click", function NgxGalleryThumbnailsComponent_a_2_Template_a_click_0_listener($event) {
      const restoredCtx = ɵɵrestoreView(_r15);
      const i_r3 = restoredCtx.index;
      const ctx_r14 = ɵɵnextContext();
      return ɵɵresetView(ctx_r14.handleClick($event, i_r3));
    });
    ɵɵtemplate(1, NgxGalleryThumbnailsComponent_a_2_div_1_Template, 1, 6, "div", 4)(2, NgxGalleryThumbnailsComponent_a_2_div_2_Template, 4, 5, "div", 5);
    ɵɵelementStart(3, "div", 6);
    ɵɵtemplate(4, NgxGalleryThumbnailsComponent_a_2_ngx_gallery_action_4_Template, 1, 3, "ngx-gallery-action", 7);
    ɵɵelementEnd();
    ɵɵtemplate(5, NgxGalleryThumbnailsComponent_a_2_div_5_Template, 3, 1, "div", 8);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const image_r2 = ctx.$implicit;
    const i_r3 = ctx.index;
    const ctx_r0 = ɵɵnextContext();
    ɵɵstyleProp("width", ctx_r0.getThumbnailWidth())("height", ctx_r0.getThumbnailHeight())("left", ctx_r0.getThumbnailLeft(i_r3))("top", ctx_r0.getThumbnailTop(i_r3));
    ɵɵproperty("href", ctx_r0.hasLink(i_r3) ? ctx_r0.links[i_r3] : "#", ɵɵsanitizeUrl)("target", ctx_r0.linkTarget)("ngClass", ɵɵpureFunction2(16, _c3, i_r3 === ctx_r0.selectedIndex, ctx_r0.clickable));
    ɵɵattribute("aria-label", ctx_r0.labels[i_r3]);
    ɵɵadvance();
    ɵɵproperty("ngIf", ctx_r0.getFileType(image_r2) === "image");
    ɵɵadvance();
    ɵɵproperty("ngIf", ctx_r0.getFileType(image_r2) === "video");
    ɵɵadvance(2);
    ɵɵproperty("ngForOf", ctx_r0.actions);
    ɵɵadvance();
    ɵɵproperty("ngIf", ctx_r0.remainingCount && ctx_r0.remainingCountValue && i_r3 === ctx_r0.rows * ctx_r0.columns - 1);
  }
}
function NgxGalleryThumbnailsComponent_ngx_gallery_arrows_3_Template(rf, ctx) {
  if (rf & 1) {
    const _r17 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "ngx-gallery-arrows", 16);
    ɵɵlistener("prevClick", function NgxGalleryThumbnailsComponent_ngx_gallery_arrows_3_Template_ngx_gallery_arrows_prevClick_0_listener() {
      ɵɵrestoreView(_r17);
      const ctx_r16 = ɵɵnextContext();
      return ɵɵresetView(ctx_r16.moveLeft());
    })("nextClick", function NgxGalleryThumbnailsComponent_ngx_gallery_arrows_3_Template_ngx_gallery_arrows_nextClick_0_listener() {
      ɵɵrestoreView(_r17);
      const ctx_r18 = ɵɵnextContext();
      return ɵɵresetView(ctx_r18.moveRight());
    });
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = ɵɵnextContext();
    ɵɵproperty("prevDisabled", !ctx_r1.canMoveLeft())("nextDisabled", !ctx_r1.canMoveRight())("arrowPrevIcon", ctx_r1.arrowPrevIcon)("arrowNextIcon", ctx_r1.arrowNextIcon);
  }
}
function NgxGalleryComponent_ngx_gallery_image_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "ngx-gallery-image", 3);
    ɵɵlistener("imageClick", function NgxGalleryComponent_ngx_gallery_image_1_Template_ngx_gallery_image_imageClick_0_listener($event) {
      ɵɵrestoreView(_r3);
      const ctx_r2 = ɵɵnextContext();
      return ɵɵresetView(ctx_r2.openPreview($event));
    })("activeChange", function NgxGalleryComponent_ngx_gallery_image_1_Template_ngx_gallery_image_activeChange_0_listener($event) {
      ɵɵrestoreView(_r3);
      const ctx_r4 = ɵɵnextContext();
      return ɵɵresetView(ctx_r4.selectFromImage($event));
    })("animating", function NgxGalleryComponent_ngx_gallery_image_1_Template_ngx_gallery_image_animating_0_listener($event) {
      ɵɵrestoreView(_r3);
      const ctx_r5 = ɵɵnextContext();
      return ɵɵresetView(ctx_r5.setAnimating($event));
    });
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = ɵɵnextContext();
    ɵɵstyleProp("height", ctx_r0.getImageHeight());
    ɵɵproperty("images", ctx_r0.mediumImages)("clickable", ctx_r0.currentOptions == null ? null : ctx_r0.currentOptions.preview)("selectedIndex", ctx_r0.selectedIndex)("arrows", ctx_r0.currentOptions == null ? null : ctx_r0.currentOptions.imageArrows)("arrowsAutoHide", ctx_r0.currentOptions == null ? null : ctx_r0.currentOptions.imageArrowsAutoHide)("arrowPrevIcon", ctx_r0.currentOptions == null ? null : ctx_r0.currentOptions.arrowPrevIcon)("arrowNextIcon", ctx_r0.currentOptions == null ? null : ctx_r0.currentOptions.arrowNextIcon)("swipe", ctx_r0.currentOptions == null ? null : ctx_r0.currentOptions.imageSwipe)("animation", ctx_r0.currentOptions == null ? null : ctx_r0.currentOptions.imageAnimation)("size", ctx_r0.currentOptions == null ? null : ctx_r0.currentOptions.imageSize)("autoPlay", ctx_r0.currentOptions == null ? null : ctx_r0.currentOptions.imageAutoPlay)("autoPlayInterval", ctx_r0.currentOptions == null ? null : ctx_r0.currentOptions.imageAutoPlayInterval)("autoPlayPauseOnHover", ctx_r0.currentOptions == null ? null : ctx_r0.currentOptions.imageAutoPlayPauseOnHover)("infinityMove", ctx_r0.currentOptions == null ? null : ctx_r0.currentOptions.imageInfinityMove)("lazyLoading", ctx_r0.currentOptions == null ? null : ctx_r0.currentOptions.lazyLoading)("actions", ctx_r0.currentOptions == null ? null : ctx_r0.currentOptions.imageActions)("descriptions", ctx_r0.descriptions)("showDescription", ctx_r0.currentOptions == null ? null : ctx_r0.currentOptions.imageDescription)("bullets", ctx_r0.currentOptions == null ? null : ctx_r0.currentOptions.imageBullets);
  }
}
var _c4 = () => [];
function NgxGalleryComponent_ngx_gallery_thumbnails_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r7 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "ngx-gallery-thumbnails", 4);
    ɵɵlistener("activeChange", function NgxGalleryComponent_ngx_gallery_thumbnails_2_Template_ngx_gallery_thumbnails_activeChange_0_listener($event) {
      ɵɵrestoreView(_r7);
      const ctx_r6 = ɵɵnextContext();
      return ɵɵresetView(ctx_r6.selectFromThumbnails($event));
    });
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = ɵɵnextContext();
    ɵɵstyleProp("margin-top", ctx_r1.getThumbnailsMarginTop())("margin-bottom", ctx_r1.getThumbnailsMarginBottom())("height", ctx_r1.getThumbnailsHeight());
    ɵɵproperty("images", ctx_r1.smallImages)("isAnimating", ctx_r1.isAnimating)("links", (ctx_r1.currentOptions == null ? null : ctx_r1.currentOptions.thumbnailsAsLinks) ? ctx_r1.links : ɵɵpureFunction0(28, _c4))("labels", ctx_r1.labels)("linkTarget", ctx_r1.currentOptions == null ? null : ctx_r1.currentOptions.linkTarget)("selectedIndex", ctx_r1.selectedIndex)("columns", ctx_r1.currentOptions == null ? null : ctx_r1.currentOptions.thumbnailsColumns)("rows", ctx_r1.currentOptions == null ? null : ctx_r1.currentOptions.thumbnailsRows)("margin", ctx_r1.currentOptions == null ? null : ctx_r1.currentOptions.thumbnailMargin)("arrows", ctx_r1.currentOptions == null ? null : ctx_r1.currentOptions.thumbnailsArrows)("arrowsAutoHide", ctx_r1.currentOptions == null ? null : ctx_r1.currentOptions.thumbnailsArrowsAutoHide)("arrowPrevIcon", ctx_r1.currentOptions == null ? null : ctx_r1.currentOptions.arrowPrevIcon)("arrowNextIcon", ctx_r1.currentOptions == null ? null : ctx_r1.currentOptions.arrowNextIcon)("clickable", (ctx_r1.currentOptions == null ? null : ctx_r1.currentOptions.image) || (ctx_r1.currentOptions == null ? null : ctx_r1.currentOptions.preview))("swipe", ctx_r1.currentOptions == null ? null : ctx_r1.currentOptions.thumbnailsSwipe)("size", ctx_r1.currentOptions == null ? null : ctx_r1.currentOptions.thumbnailSize)("moveSize", ctx_r1.currentOptions == null ? null : ctx_r1.currentOptions.thumbnailsMoveSize)("order", ctx_r1.currentOptions == null ? null : ctx_r1.currentOptions.thumbnailsOrder)("remainingCount", ctx_r1.currentOptions == null ? null : ctx_r1.currentOptions.thumbnailsRemainingCount)("lazyLoading", ctx_r1.currentOptions == null ? null : ctx_r1.currentOptions.lazyLoading)("actions", ctx_r1.currentOptions == null ? null : ctx_r1.currentOptions.thumbnailActions)("ngClass", ctx_r1.currentOptions == null ? null : ctx_r1.currentOptions.thumbnailClasses);
  }
}
var NgxGalleryService = class {
  constructor(renderer) {
    this.renderer = renderer;
    this.swipeHandlers = /* @__PURE__ */ new Map();
  }
  manageSwipe(status, element, id, nextHandler, prevHandler) {
    const handlers = this.getSwipeHandlers(id);
    try {
      if (status && !handlers) {
        this.swipeHandlers.set(id, [this.renderer.listen(element.nativeElement, "swipeleft", () => nextHandler()), this.renderer.listen(element.nativeElement, "swiperight", () => prevHandler())]);
      } else if (!status && handlers) {
        handlers.map((handler) => handler());
        this.removeSwipeHandlers(id);
      }
    } catch (e) {
    }
  }
  validateUrl(url) {
    if (url.replace) {
      return url.replace(new RegExp(" ", "g"), "%20").replace(new RegExp("'", "g"), "%27");
    } else {
      return url;
    }
  }
  getBackgroundUrl(image) {
    return "url('" + this.validateUrl(image) + "')";
  }
  getFileType(fileSource) {
    const fileExtension = fileSource.split(".").pop().toLowerCase();
    if (fileExtension === "avi" || fileExtension === "flv" || fileExtension === "wmv" || fileExtension === "mov" || fileExtension === "mp4") {
      return "video";
    }
    return "image";
  }
  getSwipeHandlers(id) {
    return this.swipeHandlers.get(id);
  }
  removeSwipeHandlers(id) {
    this.swipeHandlers.delete(id);
  }
};
NgxGalleryService.ɵfac = function NgxGalleryService_Factory(t) {
  return new (t || NgxGalleryService)(ɵɵinject(Renderer2));
};
NgxGalleryService.ɵprov = ɵɵdefineInjectable({
  token: NgxGalleryService,
  factory: NgxGalleryService.ɵfac,
  providedIn: "root"
});
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NgxGalleryService, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], function() {
    return [{
      type: Renderer2
    }];
  }, null);
})();
var NgxGalleryArrowsComponent = class {
  constructor() {
    this.prevClick = new EventEmitter();
    this.nextClick = new EventEmitter();
  }
  handlePrevClick() {
    this.prevClick.emit();
  }
  handleNextClick() {
    this.nextClick.emit();
  }
};
NgxGalleryArrowsComponent.ɵfac = function NgxGalleryArrowsComponent_Factory(t) {
  return new (t || NgxGalleryArrowsComponent)();
};
NgxGalleryArrowsComponent.ɵcmp = ɵɵdefineComponent({
  type: NgxGalleryArrowsComponent,
  selectors: [["ngx-gallery-arrows"]],
  inputs: {
    prevDisabled: "prevDisabled",
    nextDisabled: "nextDisabled",
    arrowPrevIcon: "arrowPrevIcon",
    arrowNextIcon: "arrowNextIcon"
  },
  outputs: {
    prevClick: "prevClick",
    nextClick: "nextClick"
  },
  decls: 6,
  vars: 10,
  consts: [[1, "ngx-gallery-arrows-wrapper", "ngx-gallery-arrow-left"], ["aria-hidden", "true", 1, "ngx-gallery-icon", "ngx-gallery-arrow", 3, "click"], [1, "ngx-gallery-arrows-wrapper", "ngx-gallery-arrow-right"]],
  template: function NgxGalleryArrowsComponent_Template(rf, ctx) {
    if (rf & 1) {
      ɵɵelementStart(0, "div", 0)(1, "div", 1);
      ɵɵlistener("click", function NgxGalleryArrowsComponent_Template_div_click_1_listener() {
        return ctx.handlePrevClick();
      });
      ɵɵelement(2, "i");
      ɵɵelementEnd()();
      ɵɵelementStart(3, "div", 2)(4, "div", 1);
      ɵɵlistener("click", function NgxGalleryArrowsComponent_Template_div_click_4_listener() {
        return ctx.handleNextClick();
      });
      ɵɵelement(5, "i");
      ɵɵelementEnd()();
    }
    if (rf & 2) {
      ɵɵadvance();
      ɵɵclassProp("ngx-gallery-disabled", ctx.prevDisabled);
      ɵɵadvance();
      ɵɵclassMapInterpolate1("ngx-gallery-icon-content ", ctx.arrowPrevIcon, "");
      ɵɵadvance(2);
      ɵɵclassProp("ngx-gallery-disabled", ctx.nextDisabled);
      ɵɵadvance();
      ɵɵclassMapInterpolate1("ngx-gallery-icon-content ", ctx.arrowNextIcon, "");
    }
  },
  styles: [".ngx-gallery-arrow-wrapper[_ngcontent-%COMP%]{position:absolute;height:100%;width:1px;display:table;table-layout:fixed}.ngx-gallery-preview-img-wrapper[_ngcontent-%COMP%]   .ngx-gallery-arrow-wrapper[_ngcontent-%COMP%]{z-index:10001}.ngx-gallery-arrow-left[_ngcontent-%COMP%]{left:0}.ngx-gallery-arrow-right[_ngcontent-%COMP%]{right:0}.ngx-gallery-arrow[_ngcontent-%COMP%]{top:50%;transform:translateY(-50%);cursor:pointer}.ngx-gallery-arrow.ngx-gallery-disabled[_ngcontent-%COMP%]{opacity:.6;cursor:default}.ngx-gallery-arrow-left[_ngcontent-%COMP%]   .ngx-gallery-arrow[_ngcontent-%COMP%]{left:10px}.ngx-gallery-arrow-right[_ngcontent-%COMP%]   .ngx-gallery-arrow[_ngcontent-%COMP%]{right:10px}"],
  changeDetection: 0
});
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NgxGalleryArrowsComponent, [{
    type: Component,
    args: [{
      selector: "ngx-gallery-arrows",
      changeDetection: ChangeDetectionStrategy.OnPush,
      template: '<div class="ngx-gallery-arrows-wrapper ngx-gallery-arrow-left">\n  <div class="ngx-gallery-icon ngx-gallery-arrow" aria-hidden="true" (click)="handlePrevClick()" [class.ngx-gallery-disabled]="prevDisabled">\n    <i class="ngx-gallery-icon-content {{arrowPrevIcon}}"></i>\n  </div>\n</div>\n<div class="ngx-gallery-arrows-wrapper ngx-gallery-arrow-right">\n  <div class="ngx-gallery-icon ngx-gallery-arrow" aria-hidden="true" (click)="handleNextClick()" [class.ngx-gallery-disabled]="nextDisabled">\n    <i class="ngx-gallery-icon-content {{arrowNextIcon}}"></i>\n  </div>\n</div>\n',
      styles: [".ngx-gallery-arrow-wrapper{position:absolute;height:100%;width:1px;display:table;table-layout:fixed}.ngx-gallery-preview-img-wrapper .ngx-gallery-arrow-wrapper{z-index:10001}.ngx-gallery-arrow-left{left:0}.ngx-gallery-arrow-right{right:0}.ngx-gallery-arrow{top:50%;transform:translateY(-50%);cursor:pointer}.ngx-gallery-arrow.ngx-gallery-disabled{opacity:.6;cursor:default}.ngx-gallery-arrow-left .ngx-gallery-arrow{left:10px}.ngx-gallery-arrow-right .ngx-gallery-arrow{right:10px}\n"]
    }]
  }], function() {
    return [];
  }, {
    prevDisabled: [{
      type: Input
    }],
    nextDisabled: [{
      type: Input
    }],
    arrowPrevIcon: [{
      type: Input
    }],
    arrowNextIcon: [{
      type: Input
    }],
    prevClick: [{
      type: Output
    }],
    nextClick: [{
      type: Output
    }]
  });
})();
var NgxGalleryActionComponent = class {
  constructor() {
    this.disabled = false;
    this.titleText = "";
    this.closeClick = new EventEmitter();
  }
  handleClick(event) {
    if (!this.disabled) {
      this.closeClick.emit(event);
    }
    event.stopPropagation();
    event.preventDefault();
  }
};
NgxGalleryActionComponent.ɵfac = function NgxGalleryActionComponent_Factory(t) {
  return new (t || NgxGalleryActionComponent)();
};
NgxGalleryActionComponent.ɵcmp = ɵɵdefineComponent({
  type: NgxGalleryActionComponent,
  selectors: [["ngx-gallery-action"]],
  inputs: {
    icon: "icon",
    disabled: "disabled",
    titleText: "titleText"
  },
  outputs: {
    closeClick: "closeClick"
  },
  decls: 2,
  vars: 6,
  consts: [["aria-hidden", "true", 1, "ngx-gallery-icon", 3, "title", "click"]],
  template: function NgxGalleryActionComponent_Template(rf, ctx) {
    if (rf & 1) {
      ɵɵelementStart(0, "div", 0);
      ɵɵlistener("click", function NgxGalleryActionComponent_Template_div_click_0_listener($event) {
        return ctx.handleClick($event);
      });
      ɵɵelement(1, "i");
      ɵɵelementEnd();
    }
    if (rf & 2) {
      ɵɵclassProp("ngx-gallery-icon-disabled", ctx.disabled);
      ɵɵpropertyInterpolate("title", ctx.titleText);
      ɵɵadvance();
      ɵɵclassMapInterpolate1("ngx-gallery-icon-content ", ctx.icon, "");
    }
  },
  styles: [".ngx-gallery-icon[_ngcontent-%COMP%]{color:#fff;font-size:25px;position:absolute;z-index:2000;display:inline-block}.ngx-gallery-icon[_ngcontent-%COMP%]{position:relative;margin-right:10px;margin-top:10px;font-size:25px;cursor:pointer;text-decoration:none}.ngx-gallery-icon[_ngcontent-%COMP%]   .ngx-gallery-icon-content[_ngcontent-%COMP%]{display:block}"],
  changeDetection: 0
});
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NgxGalleryActionComponent, [{
    type: Component,
    args: [{
      selector: "ngx-gallery-action",
      changeDetection: ChangeDetectionStrategy.OnPush,
      template: '<div class="ngx-gallery-icon" [class.ngx-gallery-icon-disabled]="disabled"\n     aria-hidden="true"\n     title="{{ titleText }}"\n     (click)="handleClick($event)">\n  <i class="ngx-gallery-icon-content {{ icon }}"></i>\n</div>\n',
      styles: [".ngx-gallery-icon{color:#fff;font-size:25px;position:absolute;z-index:2000;display:inline-block}.ngx-gallery-icon{position:relative;margin-right:10px;margin-top:10px;font-size:25px;cursor:pointer;text-decoration:none}.ngx-gallery-icon .ngx-gallery-icon-content{display:block}\n"]
    }]
  }], function() {
    return [];
  }, {
    icon: [{
      type: Input
    }],
    disabled: [{
      type: Input
    }],
    titleText: [{
      type: Input
    }],
    closeClick: [{
      type: Output
    }]
  });
})();
var NgxGalleryBulletsComponent = class {
  constructor() {
    this.active = 0;
    this.bulletChange = new EventEmitter();
  }
  getBullets() {
    return Array(this.count);
  }
  handleChange(event, index) {
    this.bulletChange.emit(index);
  }
};
NgxGalleryBulletsComponent.ɵfac = function NgxGalleryBulletsComponent_Factory(t) {
  return new (t || NgxGalleryBulletsComponent)();
};
NgxGalleryBulletsComponent.ɵcmp = ɵɵdefineComponent({
  type: NgxGalleryBulletsComponent,
  selectors: [["ngx-gallery-bullets"]],
  inputs: {
    count: "count",
    active: "active"
  },
  outputs: {
    bulletChange: "bulletChange"
  },
  decls: 1,
  vars: 1,
  consts: [["class", "ngx-gallery-bullet", 3, "ngClass", "click", 4, "ngFor", "ngForOf"], [1, "ngx-gallery-bullet", 3, "ngClass", "click"]],
  template: function NgxGalleryBulletsComponent_Template(rf, ctx) {
    if (rf & 1) {
      ɵɵtemplate(0, NgxGalleryBulletsComponent_div_0_Template, 1, 3, "div", 0);
    }
    if (rf & 2) {
      ɵɵproperty("ngForOf", ctx.getBullets());
    }
  },
  dependencies: [NgForOf, NgClass],
  styles: ["[_nghost-%COMP%]{position:absolute;z-index:2000;display:inline-flex;left:50%;transform:translate(-50%);bottom:0;padding:10px}.ngx-gallery-bullet[_ngcontent-%COMP%]{width:10px;height:10px;border-radius:50%;cursor:pointer;background:white}.ngx-gallery-bullet[_ngcontent-%COMP%]:not(:first-child){margin-left:5px}.ngx-gallery-bullet[_ngcontent-%COMP%]:hover, .ngx-gallery-bullet.ngx-gallery-active[_ngcontent-%COMP%]{background:black}"],
  changeDetection: 0
});
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NgxGalleryBulletsComponent, [{
    type: Component,
    args: [{
      selector: "ngx-gallery-bullets",
      changeDetection: ChangeDetectionStrategy.OnPush,
      template: `<div class="ngx-gallery-bullet" *ngFor="let bullet of getBullets(); let i = index;" (click)="handleChange($event, i)"
     [ngClass]="{ 'ngx-gallery-active': i === active }"></div>
`,
      styles: [":host{position:absolute;z-index:2000;display:inline-flex;left:50%;transform:translate(-50%);bottom:0;padding:10px}.ngx-gallery-bullet{width:10px;height:10px;border-radius:50%;cursor:pointer;background:white}.ngx-gallery-bullet:not(:first-child){margin-left:5px}.ngx-gallery-bullet:hover,.ngx-gallery-bullet.ngx-gallery-active{background:black}\n"]
    }]
  }], function() {
    return [];
  }, {
    count: [{
      type: Input
    }],
    active: [{
      type: Input
    }],
    bulletChange: [{
      type: Output
    }]
  });
})();
var NgxGalleryPreviewComponent = class {
  constructor(sanitization, elementRef, helperService, renderer, changeDetectorRef) {
    this.sanitization = sanitization;
    this.elementRef = elementRef;
    this.helperService = helperService;
    this.renderer = renderer;
    this.changeDetectorRef = changeDetectorRef;
    this.showSpinner = false;
    this.positionLeft = 0;
    this.positionTop = 0;
    this.zoomValue = 1;
    this.loading = false;
    this.rotateValue = 0;
    this.index = 0;
    this.previewOpen = new EventEmitter();
    this.previewClose = new EventEmitter();
    this.activeChange = new EventEmitter();
    this.isOpen = false;
    this.initialX = 0;
    this.initialY = 0;
    this.initialLeft = 0;
    this.initialTop = 0;
    this.isMove = false;
  }
  ngOnInit() {
    if (this.arrows && this.arrowsAutoHide) {
      this.arrows = false;
    }
  }
  ngOnChanges(changes) {
    if (changes["swipe"]) {
      this.helperService.manageSwipe(this.swipe, this.elementRef, "preview", () => this.showNext(), () => this.showPrev());
    }
  }
  ngOnDestroy() {
    if (this.keyDownListener) {
      this.keyDownListener();
    }
  }
  onMouseEnter() {
    if (this.arrowsAutoHide && !this.arrows) {
      this.arrows = true;
    }
  }
  onMouseLeave() {
    if (this.arrowsAutoHide && this.arrows) {
      this.arrows = false;
    }
  }
  onKeyDown(e) {
    if (this.isOpen) {
      if (this.keyboardNavigation) {
        if (this.isKeyboardPrev(e)) {
          this.showPrev();
        } else if (this.isKeyboardNext(e)) {
          this.showNext();
        }
      }
      if (this.closeOnEsc && this.isKeyboardEsc(e)) {
        this.close();
      }
    }
  }
  open(index) {
    this.previewOpen.emit();
    this.index = index;
    this.isOpen = true;
    this.show(true);
    if (this.forceFullscreen) {
      this.manageFullscreen();
    }
    this.keyDownListener = this.renderer.listen("window", "keydown", (e) => this.onKeyDown(e));
  }
  close() {
    this.isOpen = false;
    const video = this.previewImage.nativeElement;
    if (video.currentTime > 0 && !video.paused && !video.ended && video.readyState > 2) {
      video.pause();
    }
    this.closeFullscreen();
    this.previewClose.emit();
    this.stopAutoPlay();
    if (this.keyDownListener) {
      this.keyDownListener();
    }
  }
  imageMouseEnter() {
    if (this.autoPlay && this.autoPlayPauseOnHover) {
      this.stopAutoPlay();
    }
  }
  imageMouseLeave() {
    if (this.autoPlay && this.autoPlayPauseOnHover) {
      this.startAutoPlay();
    }
  }
  startAutoPlay() {
    if (this.autoPlay) {
      this.stopAutoPlay();
      this.timer = setTimeout(() => {
        if (!this.showNext()) {
          this.index = -1;
          this.showNext();
        }
      }, this.autoPlayInterval);
    }
  }
  stopAutoPlay() {
    if (this.timer) {
      clearTimeout(this.timer);
    }
  }
  showAtIndex(index) {
    this.index = index;
    this.show();
  }
  showNext() {
    if (this.canShowNext()) {
      this.index++;
      if (this.index === this.images.length) {
        this.index = 0;
      }
      this.show();
      return true;
    } else {
      return false;
    }
  }
  showPrev() {
    if (this.canShowPrev()) {
      this.index--;
      if (this.index < 0) {
        this.index = this.images.length - 1;
      }
      this.show();
    }
  }
  canShowNext() {
    if (this.loading) {
      return false;
    } else if (this.images) {
      return this.infinityMove || this.index < this.images.length - 1;
    } else {
      return false;
    }
  }
  canShowPrev() {
    if (this.loading) {
      return false;
    } else if (this.images) {
      return this.infinityMove || this.index > 0;
    } else {
      return false;
    }
  }
  manageFullscreen() {
    if (this.fullscreen || this.forceFullscreen) {
      const doc = document;
      if (!doc.fullscreenElement && !doc.mozFullScreenElement && !doc.webkitFullscreenElement && !doc.msFullscreenElement) {
        this.openFullscreen();
      } else {
        this.closeFullscreen();
      }
    }
  }
  getSafeUrl(image) {
    return this.sanitization.bypassSecurityTrustUrl(image);
  }
  getFileType(fileSource) {
    return this.helperService.getFileType(fileSource);
  }
  zoomIn() {
    if (this.canZoomIn()) {
      this.zoomValue += this.zoomStep;
      if (this.zoomValue > this.zoomMax) {
        this.zoomValue = this.zoomMax;
      }
    }
  }
  zoomOut() {
    if (this.canZoomOut()) {
      this.zoomValue -= this.zoomStep;
      if (this.zoomValue < this.zoomMin) {
        this.zoomValue = this.zoomMin;
      }
      if (this.zoomValue <= 1) {
        this.resetPosition();
      }
    }
  }
  rotateLeft() {
    this.rotateValue -= 90;
  }
  rotateRight() {
    this.rotateValue += 90;
  }
  getTransform() {
    return this.sanitization.bypassSecurityTrustStyle("scale(" + this.zoomValue + ") rotate(" + this.rotateValue + "deg)");
  }
  canZoomIn() {
    return this.zoomValue < this.zoomMax;
  }
  canZoomOut() {
    return this.zoomValue > this.zoomMin;
  }
  canDragOnZoom() {
    return this.zoom && this.zoomValue > 1;
  }
  mouseDownHandler(e) {
    if (this.canDragOnZoom()) {
      this.initialX = this.getClientX(e);
      this.initialY = this.getClientY(e);
      this.initialLeft = this.positionLeft;
      this.initialTop = this.positionTop;
      this.isMove = true;
      e.preventDefault();
    }
  }
  mouseUpHandler(e) {
    this.isMove = false;
  }
  mouseMoveHandler(e) {
    if (this.isMove) {
      this.positionLeft = this.initialLeft + (this.getClientX(e) - this.initialX);
      this.positionTop = this.initialTop + (this.getClientY(e) - this.initialY);
    }
  }
  getClientX(e) {
    return e.touches && e.touches.length ? e.touches[0].clientX : e.clientX;
  }
  getClientY(e) {
    return e.touches && e.touches.length ? e.touches[0].clientY : e.clientY;
  }
  resetPosition() {
    if (this.zoom) {
      this.positionLeft = 0;
      this.positionTop = 0;
    }
  }
  isKeyboardNext(e) {
    return e.keyCode === 39;
  }
  isKeyboardPrev(e) {
    return e.keyCode === 37;
  }
  isKeyboardEsc(e) {
    return e.keyCode === 27;
  }
  openFullscreen() {
    const element = document.documentElement;
    if (element.requestFullscreen) {
      element.requestFullscreen();
    } else if (element.msRequestFullscreen) {
      element.msRequestFullscreen();
    } else if (element.mozRequestFullScreen) {
      element.mozRequestFullScreen();
    } else if (element.webkitRequestFullscreen) {
      element.webkitRequestFullscreen();
    }
  }
  closeFullscreen() {
    if (this.isFullscreen()) {
      const doc = document;
      if (doc.exitFullscreen) {
        doc.exitFullscreen();
      } else if (doc.msExitFullscreen) {
        doc.msExitFullscreen();
      } else if (doc.mozCancelFullScreen) {
        doc.mozCancelFullScreen();
      } else if (doc.webkitExitFullscreen) {
        doc.webkitExitFullscreen();
      }
    }
  }
  isFullscreen() {
    const doc = document;
    return doc.fullscreenElement || doc.webkitFullscreenElement || doc.mozFullScreenElement || doc.msFullscreenElement;
  }
  show(first = false) {
    this.loading = true;
    this.stopAutoPlay();
    this.activeChange.emit(this.index);
    if (first || !this.animation) {
      this._show();
    } else {
      setTimeout(() => this._show(), 600);
    }
  }
  _show() {
    this.zoomValue = 1;
    this.rotateValue = 0;
    this.resetPosition();
    this.src = this.getSafeUrl(this.images[this.index]);
    this.type = this.getFileType(this.images[this.index]);
    this.srcIndex = this.index;
    this.description = this.descriptions[this.index];
    this.changeDetectorRef.markForCheck();
    setTimeout(() => {
      if (this.isLoaded(this.previewImage.nativeElement) || this.type === "video") {
        this.loading = false;
        this.startAutoPlay();
        this.changeDetectorRef.markForCheck();
      } else if (this.type === "video") {
      } else {
        setTimeout(() => {
          if (this.loading) {
            this.showSpinner = true;
            this.changeDetectorRef.markForCheck();
          }
        });
        this.previewImage.nativeElement.onload = () => {
          this.loading = false;
          this.showSpinner = false;
          this.previewImage.nativeElement.onload = null;
          this.startAutoPlay();
          this.changeDetectorRef.markForCheck();
        };
      }
    });
  }
  isLoaded(img) {
    if (!img.complete) {
      return false;
    }
    return !(typeof img.naturalWidth !== "undefined" && img.naturalWidth === 0);
  }
};
NgxGalleryPreviewComponent.ɵfac = function NgxGalleryPreviewComponent_Factory(t) {
  return new (t || NgxGalleryPreviewComponent)(ɵɵdirectiveInject(DomSanitizer), ɵɵdirectiveInject(ElementRef), ɵɵdirectiveInject(NgxGalleryService), ɵɵdirectiveInject(Renderer2), ɵɵdirectiveInject(ChangeDetectorRef));
};
NgxGalleryPreviewComponent.ɵcmp = ɵɵdefineComponent({
  type: NgxGalleryPreviewComponent,
  selectors: [["ngx-gallery-preview"]],
  viewQuery: function NgxGalleryPreviewComponent_Query(rf, ctx) {
    if (rf & 1) {
      ɵɵviewQuery(_c1, 5);
    }
    if (rf & 2) {
      let _t;
      ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.previewImage = _t.first);
    }
  },
  hostBindings: function NgxGalleryPreviewComponent_HostBindings(rf, ctx) {
    if (rf & 1) {
      ɵɵlistener("mouseenter", function NgxGalleryPreviewComponent_mouseenter_HostBindingHandler() {
        return ctx.onMouseEnter();
      })("mouseleave", function NgxGalleryPreviewComponent_mouseleave_HostBindingHandler() {
        return ctx.onMouseLeave();
      });
    }
  },
  inputs: {
    images: "images",
    descriptions: "descriptions",
    showDescription: "showDescription",
    arrows: "arrows",
    arrowsAutoHide: "arrowsAutoHide",
    swipe: "swipe",
    fullscreen: "fullscreen",
    forceFullscreen: "forceFullscreen",
    closeOnClick: "closeOnClick",
    closeOnEsc: "closeOnEsc",
    keyboardNavigation: "keyboardNavigation",
    arrowPrevIcon: "arrowPrevIcon",
    arrowNextIcon: "arrowNextIcon",
    closeIcon: "closeIcon",
    fullscreenIcon: "fullscreenIcon",
    spinnerIcon: "spinnerIcon",
    autoPlay: "autoPlay",
    autoPlayInterval: "autoPlayInterval",
    autoPlayPauseOnHover: "autoPlayPauseOnHover",
    infinityMove: "infinityMove",
    zoom: "zoom",
    zoomStep: "zoomStep",
    zoomMax: "zoomMax",
    zoomMin: "zoomMin",
    zoomInIcon: "zoomInIcon",
    zoomOutIcon: "zoomOutIcon",
    animation: "animation",
    actions: "actions",
    rotate: "rotate",
    rotateLeftIcon: "rotateLeftIcon",
    rotateRightIcon: "rotateRightIcon",
    download: "download",
    downloadIcon: "downloadIcon",
    bullets: "bullets"
  },
  outputs: {
    previewOpen: "previewOpen",
    previewClose: "previewClose",
    activeChange: "activeChange"
  },
  features: [ɵɵNgOnChangesFeature],
  decls: 19,
  vars: 18,
  consts: [[3, "prevDisabled", "nextDisabled", "arrowPrevIcon", "arrowNextIcon", "prevClick", "nextClick", 4, "ngIf"], [1, "ngx-gallery-preview-top"], [1, "ngx-gallery-preview-icons"], [3, "icon", "disabled", "titleText", "closeClick", 4, "ngFor", "ngForOf"], ["class", "ngx-gallery-icon", "aria-hidden", "true", "download", "", 3, "href", 4, "ngIf"], [3, "icon", "disabled", "closeClick", 4, "ngIf"], [3, "icon", "closeClick", 4, "ngIf"], [3, "icon", "closeClick"], [1, "ngx-spinner-wrapper", "ngx-gallery-center"], ["aria-hidden", "true"], [1, "ngx-gallery-preview-wrapper", 3, "click", "mouseup", "mousemove", "touchend", "touchmove"], [1, "ngx-gallery-preview-img-wrapper"], ["class", "ngx-gallery-preview-img ngx-gallery-center", 3, "src", "ngx-gallery-active", "animation", "ngx-gallery-grab", "transform", "left", "top", "click", "mouseenter", "mouseleave", "mousedown", "touchstart", 4, "ngIf"], ["controls", "", "style", "width: 100%; height: 100%;", "class", "ngx-gallery-preview-img ngx-gallery-center", 3, "ngx-gallery-active", "animation", "ngx-gallery-grab", "transform", "left", "top", "click", "mouseenter", "mouseleave", "mousedown", "touchstart", 4, "ngIf"], [3, "count", "active", "bulletChange", 4, "ngIf"], ["class", "ngx-gallery-preview-text", 3, "innerHTML", "click", 4, "ngIf"], [3, "prevDisabled", "nextDisabled", "arrowPrevIcon", "arrowNextIcon", "prevClick", "nextClick"], [3, "icon", "disabled", "titleText", "closeClick"], ["aria-hidden", "true", "download", "", 1, "ngx-gallery-icon", 3, "href"], [3, "icon", "disabled", "closeClick"], [1, "ngx-gallery-preview-img", "ngx-gallery-center", 3, "src", "click", "mouseenter", "mouseleave", "mousedown", "touchstart"], ["previewImage", ""], ["controls", "", 1, "ngx-gallery-preview-img", "ngx-gallery-center", 2, "width", "100%", "height", "100%", 3, "click", "mouseenter", "mouseleave", "mousedown", "touchstart"], [3, "src"], [3, "count", "active", "bulletChange"], [1, "ngx-gallery-preview-text", 3, "innerHTML", "click"]],
  template: function NgxGalleryPreviewComponent_Template(rf, ctx) {
    if (rf & 1) {
      ɵɵtemplate(0, NgxGalleryPreviewComponent_ngx_gallery_arrows_0_Template, 1, 4, "ngx-gallery-arrows", 0);
      ɵɵelementStart(1, "div", 1)(2, "div", 2);
      ɵɵtemplate(3, NgxGalleryPreviewComponent_ngx_gallery_action_3_Template, 1, 3, "ngx-gallery-action", 3)(4, NgxGalleryPreviewComponent_a_4_Template, 2, 4, "a", 4)(5, NgxGalleryPreviewComponent_ngx_gallery_action_5_Template, 1, 2, "ngx-gallery-action", 5)(6, NgxGalleryPreviewComponent_ngx_gallery_action_6_Template, 1, 2, "ngx-gallery-action", 5)(7, NgxGalleryPreviewComponent_ngx_gallery_action_7_Template, 1, 1, "ngx-gallery-action", 6)(8, NgxGalleryPreviewComponent_ngx_gallery_action_8_Template, 1, 1, "ngx-gallery-action", 6)(9, NgxGalleryPreviewComponent_ngx_gallery_action_9_Template, 1, 1, "ngx-gallery-action", 6);
      ɵɵelementStart(10, "ngx-gallery-action", 7);
      ɵɵlistener("closeClick", function NgxGalleryPreviewComponent_Template_ngx_gallery_action_closeClick_10_listener() {
        return ctx.close();
      });
      ɵɵelementEnd()()();
      ɵɵelementStart(11, "div", 8);
      ɵɵelement(12, "i", 9);
      ɵɵelementEnd();
      ɵɵelementStart(13, "div", 10);
      ɵɵlistener("click", function NgxGalleryPreviewComponent_Template_div_click_13_listener() {
        return ctx.closeOnClick && ctx.close();
      })("mouseup", function NgxGalleryPreviewComponent_Template_div_mouseup_13_listener($event) {
        return ctx.mouseUpHandler($event);
      })("mousemove", function NgxGalleryPreviewComponent_Template_div_mousemove_13_listener($event) {
        return ctx.mouseMoveHandler($event);
      })("touchend", function NgxGalleryPreviewComponent_Template_div_touchend_13_listener($event) {
        return ctx.mouseUpHandler($event);
      })("touchmove", function NgxGalleryPreviewComponent_Template_div_touchmove_13_listener($event) {
        return ctx.mouseMoveHandler($event);
      });
      ɵɵelementStart(14, "div", 11);
      ɵɵtemplate(15, NgxGalleryPreviewComponent_img_15_Template, 2, 13, "img", 12)(16, NgxGalleryPreviewComponent_video_16_Template, 4, 13, "video", 13)(17, NgxGalleryPreviewComponent_ngx_gallery_bullets_17_Template, 1, 2, "ngx-gallery-bullets", 14);
      ɵɵelementEnd();
      ɵɵtemplate(18, NgxGalleryPreviewComponent_div_18_Template, 1, 1, "div", 15);
      ɵɵelementEnd();
    }
    if (rf & 2) {
      ɵɵproperty("ngIf", ctx.arrows);
      ɵɵadvance(3);
      ɵɵproperty("ngForOf", ctx.actions);
      ɵɵadvance();
      ɵɵproperty("ngIf", ctx.download && ctx.src);
      ɵɵadvance();
      ɵɵproperty("ngIf", ctx.zoom);
      ɵɵadvance();
      ɵɵproperty("ngIf", ctx.zoom);
      ɵɵadvance();
      ɵɵproperty("ngIf", ctx.rotate);
      ɵɵadvance();
      ɵɵproperty("ngIf", ctx.rotate);
      ɵɵadvance();
      ɵɵproperty("ngIf", ctx.fullscreen);
      ɵɵadvance();
      ɵɵproperty("icon", "ngx-gallery-close " + ctx.closeIcon);
      ɵɵadvance();
      ɵɵclassProp("ngx-gallery-active", ctx.showSpinner);
      ɵɵadvance();
      ɵɵclassMapInterpolate1("ngx-gallery-icon ngx-gallery-spinner ", ctx.spinnerIcon, "");
      ɵɵadvance(3);
      ɵɵproperty("ngIf", ctx.src && ctx.type === "image");
      ɵɵadvance();
      ɵɵproperty("ngIf", ctx.src && ctx.type === "video");
      ɵɵadvance();
      ɵɵproperty("ngIf", ctx.bullets);
      ɵɵadvance();
      ɵɵproperty("ngIf", ctx.showDescription && ctx.description);
    }
  },
  dependencies: [NgxGalleryArrowsComponent, NgxGalleryActionComponent, NgxGalleryBulletsComponent, NgIf, NgForOf],
  styles: [".ngx-gallery-active[_nghost-%COMP%]{width:100%;height:100%;position:fixed;left:0;top:0;background:rgba(0,0,0,.7);z-index:10000;display:inline-block;font-size:50px!important}[_nghost-%COMP%]{display:none;font-size:50px!important}[_nghost-%COMP%]   .ngx-gallery-arrow[_ngcontent-%COMP%]{font-size:50px!important}ngx-gallery-bullets[_ngcontent-%COMP%]{height:5%;align-items:center;padding:0}.ngx-gallery-preview-img[_ngcontent-%COMP%]{opacity:0;max-width:90%;max-height:90%;-webkit-user-select:none;user-select:none;transition:transform .5s}.ngx-gallery-preview-img.animation[_ngcontent-%COMP%]{transition:opacity .5s linear,transform .5s}.ngx-gallery-preview-img.ngx-gallery-active[_ngcontent-%COMP%]{opacity:1}.ngx-gallery-preview-img.ngx-gallery-grab[_ngcontent-%COMP%]{cursor:grab}.ngx-gallery-icon.ngx-gallery-spinner[_ngcontent-%COMP%]{font-size:50px;left:0;display:inline-block}[_nghost-%COMP%]   .ngx-gallery-preview-top[_ngcontent-%COMP%]{position:absolute;width:100%;-webkit-user-select:none;user-select:none;font-size:25px}.ngx-gallery-preview-icons[_ngcontent-%COMP%]{float:right}.ngx-gallery-preview-icons[_ngcontent-%COMP%]   .ngx-gallery-icon[_ngcontent-%COMP%]{position:relative;margin-right:10px;margin-top:10px;font-size:25px;cursor:pointer;text-decoration:none}.ngx-gallery-preview-icons[_ngcontent-%COMP%]   .ngx-gallery-icon.ngx-gallery-icon-disabled[_ngcontent-%COMP%]{cursor:default;opacity:.4}.ngx-spinner-wrapper[_ngcontent-%COMP%]{width:50px;height:50px;display:none}.ngx-spinner-wrapper.ngx-gallery-active[_ngcontent-%COMP%]{display:inline-block}.ngx-gallery-center[_ngcontent-%COMP%]{position:absolute;left:0;right:0;bottom:0;margin:auto;top:0}.ngx-gallery-preview-text[_ngcontent-%COMP%]{width:100%;background:rgba(0,0,0,.7);padding:10px;text-align:center;color:#fff;font-size:16px;flex:0 1 auto;z-index:10}.ngx-gallery-preview-wrapper[_ngcontent-%COMP%]{width:100%;height:100%;display:flex;flex-flow:column}.ngx-gallery-preview-img-wrapper[_ngcontent-%COMP%]{flex:1 1 auto;position:relative}"],
  changeDetection: 0
});
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NgxGalleryPreviewComponent, [{
    type: Component,
    args: [{
      selector: "ngx-gallery-preview",
      changeDetection: ChangeDetectionStrategy.OnPush,
      template: `<ngx-gallery-arrows *ngIf="arrows" (prevClick)="showPrev()" (nextClick)="showNext()" [prevDisabled]="!canShowPrev()"
                    [nextDisabled]="!canShowNext()" [arrowPrevIcon]="arrowPrevIcon"
                    [arrowNextIcon]="arrowNextIcon"></ngx-gallery-arrows>
<div class="ngx-gallery-preview-top">
  <div class="ngx-gallery-preview-icons">
    <ngx-gallery-action *ngFor="let action of actions" [icon]="action.icon" [disabled]="action.disabled"
                        [titleText]="action.titleText" (closeClick)="action.onClick($event, index)"></ngx-gallery-action>
    <a *ngIf="download && src" [href]="src" class="ngx-gallery-icon" aria-hidden="true" download>
      <i class="ngx-gallery-icon-content {{ downloadIcon }}"></i>
    </a>
    <ngx-gallery-action *ngIf="zoom" [icon]="zoomOutIcon" [disabled]="!canZoomOut()"
                        (closeClick)="zoomOut()"></ngx-gallery-action>
    <ngx-gallery-action *ngIf="zoom" [icon]="zoomInIcon" [disabled]="!canZoomIn()"
                        (closeClick)="zoomIn()"></ngx-gallery-action>
    <ngx-gallery-action *ngIf="rotate" [icon]="rotateLeftIcon" (closeClick)="rotateLeft()"></ngx-gallery-action>
    <ngx-gallery-action *ngIf="rotate" [icon]="rotateRightIcon" (closeClick)="rotateRight()"></ngx-gallery-action>
    <ngx-gallery-action *ngIf="fullscreen" [icon]="'ngx-gallery-fullscreen ' + fullscreenIcon"
                        (closeClick)="manageFullscreen()"></ngx-gallery-action>
    <ngx-gallery-action [icon]="'ngx-gallery-close ' + closeIcon" (closeClick)="close()"></ngx-gallery-action>
  </div>
</div>
<div class="ngx-spinner-wrapper ngx-gallery-center" [class.ngx-gallery-active]="showSpinner">
  <i class="ngx-gallery-icon ngx-gallery-spinner {{spinnerIcon}}" aria-hidden="true"></i>
</div>
<div class="ngx-gallery-preview-wrapper" (click)="closeOnClick && close()" (mouseup)="mouseUpHandler($event)"
     (mousemove)="mouseMoveHandler($event)" (touchend)="mouseUpHandler($event)" (touchmove)="mouseMoveHandler($event)">
  <div class="ngx-gallery-preview-img-wrapper">
    <img *ngIf="src && type === 'image'" #previewImage class="ngx-gallery-preview-img ngx-gallery-center" [src]="src"
         (click)="$event.stopPropagation()" (mouseenter)="imageMouseEnter()" (mouseleave)="imageMouseLeave()"
         (mousedown)="mouseDownHandler($event)" (touchstart)="mouseDownHandler($event)"
         [class.ngx-gallery-active]="!loading" [class.animation]="animation" [class.ngx-gallery-grab]="canDragOnZoom()"
         [style.transform]="getTransform()" [style.left]="positionLeft + 'px'" [style.top]="positionTop + 'px'"/>
    <video *ngIf="src && type === 'video'"  #previewImage controls style="width: 100%; height: 100%;"
    class="ngx-gallery-preview-img ngx-gallery-center"
    (click)="$event.stopPropagation()" (mouseenter)="imageMouseEnter()" (mouseleave)="imageMouseLeave()" (mousedown)="mouseDownHandler($event)" (touchstart)="mouseDownHandler($event)"
    [class.ngx-gallery-active]="!loading" [class.animation]="animation" [class.ngx-gallery-grab]="canDragOnZoom()" [style.transform]="getTransform()" [style.left]="positionLeft + 'px'" [style.top]="positionTop + 'px'">
      <source [src]="src">
      Your browser does not support the video tag.
    </video>
    <ngx-gallery-bullets *ngIf="bullets" [count]="images.length" [active]="index"
                         (bulletChange)="showAtIndex($event)"></ngx-gallery-bullets>
  </div>
  <div class="ngx-gallery-preview-text" *ngIf="showDescription && description" [innerHTML]="description"
       (click)="$event.stopPropagation()"></div>
</div>
`,
      styles: [":host.ngx-gallery-active{width:100%;height:100%;position:fixed;left:0;top:0;background:rgba(0,0,0,.7);z-index:10000;display:inline-block;font-size:50px!important}:host{display:none;font-size:50px!important}:host .ngx-gallery-arrow{font-size:50px!important}ngx-gallery-bullets{height:5%;align-items:center;padding:0}.ngx-gallery-preview-img{opacity:0;max-width:90%;max-height:90%;-webkit-user-select:none;user-select:none;transition:transform .5s}.ngx-gallery-preview-img.animation{transition:opacity .5s linear,transform .5s}.ngx-gallery-preview-img.ngx-gallery-active{opacity:1}.ngx-gallery-preview-img.ngx-gallery-grab{cursor:grab}.ngx-gallery-icon.ngx-gallery-spinner{font-size:50px;left:0;display:inline-block}:host .ngx-gallery-preview-top{position:absolute;width:100%;-webkit-user-select:none;user-select:none;font-size:25px}.ngx-gallery-preview-icons{float:right}.ngx-gallery-preview-icons .ngx-gallery-icon{position:relative;margin-right:10px;margin-top:10px;font-size:25px;cursor:pointer;text-decoration:none}.ngx-gallery-preview-icons .ngx-gallery-icon.ngx-gallery-icon-disabled{cursor:default;opacity:.4}.ngx-spinner-wrapper{width:50px;height:50px;display:none}.ngx-spinner-wrapper.ngx-gallery-active{display:inline-block}.ngx-gallery-center{position:absolute;left:0;right:0;bottom:0;margin:auto;top:0}.ngx-gallery-preview-text{width:100%;background:rgba(0,0,0,.7);padding:10px;text-align:center;color:#fff;font-size:16px;flex:0 1 auto;z-index:10}.ngx-gallery-preview-wrapper{width:100%;height:100%;display:flex;flex-flow:column}.ngx-gallery-preview-img-wrapper{flex:1 1 auto;position:relative}\n"]
    }]
  }], function() {
    return [{
      type: DomSanitizer
    }, {
      type: ElementRef
    }, {
      type: NgxGalleryService
    }, {
      type: Renderer2
    }, {
      type: ChangeDetectorRef
    }];
  }, {
    images: [{
      type: Input
    }],
    descriptions: [{
      type: Input
    }],
    showDescription: [{
      type: Input
    }],
    arrows: [{
      type: Input
    }],
    arrowsAutoHide: [{
      type: Input
    }],
    swipe: [{
      type: Input
    }],
    fullscreen: [{
      type: Input
    }],
    forceFullscreen: [{
      type: Input
    }],
    closeOnClick: [{
      type: Input
    }],
    closeOnEsc: [{
      type: Input
    }],
    keyboardNavigation: [{
      type: Input
    }],
    arrowPrevIcon: [{
      type: Input
    }],
    arrowNextIcon: [{
      type: Input
    }],
    closeIcon: [{
      type: Input
    }],
    fullscreenIcon: [{
      type: Input
    }],
    spinnerIcon: [{
      type: Input
    }],
    autoPlay: [{
      type: Input
    }],
    autoPlayInterval: [{
      type: Input
    }],
    autoPlayPauseOnHover: [{
      type: Input
    }],
    infinityMove: [{
      type: Input
    }],
    zoom: [{
      type: Input
    }],
    zoomStep: [{
      type: Input
    }],
    zoomMax: [{
      type: Input
    }],
    zoomMin: [{
      type: Input
    }],
    zoomInIcon: [{
      type: Input
    }],
    zoomOutIcon: [{
      type: Input
    }],
    animation: [{
      type: Input
    }],
    actions: [{
      type: Input
    }],
    rotate: [{
      type: Input
    }],
    rotateLeftIcon: [{
      type: Input
    }],
    rotateRightIcon: [{
      type: Input
    }],
    download: [{
      type: Input
    }],
    downloadIcon: [{
      type: Input
    }],
    bullets: [{
      type: Input
    }],
    previewOpen: [{
      type: Output
    }],
    previewClose: [{
      type: Output
    }],
    activeChange: [{
      type: Output
    }],
    previewImage: [{
      type: ViewChild,
      args: ["previewImage"]
    }],
    onMouseEnter: [{
      type: HostListener,
      args: ["mouseenter"]
    }],
    onMouseLeave: [{
      type: HostListener,
      args: ["mouseleave"]
    }]
  });
})();
var NgxGalleryAnimation = class {
};
NgxGalleryAnimation.Fade = "fade";
NgxGalleryAnimation.Slide = "slide";
NgxGalleryAnimation.Rotate = "rotate";
NgxGalleryAnimation.Zoom = "zoom";
var NgxGalleryImageComponent = class {
  constructor(sanitization, changeDetectorRef, elementRef, helperService) {
    this.sanitization = sanitization;
    this.changeDetectorRef = changeDetectorRef;
    this.elementRef = elementRef;
    this.helperService = helperService;
    this.imageClick = new EventEmitter();
    this.activeChange = new EventEmitter();
    this.animating = new EventEmitter();
    this.canChangeImage = true;
    this.isAnimating = false;
    this.changeDetectorRef = changeDetectorRef;
    this.action = "none";
  }
  set selectedIndex(index) {
    if (index > this._selectedIndex) {
      let action;
      if (this.animation === NgxGalleryAnimation.Slide) {
        action = "slideRight";
      } else if (this.animation === NgxGalleryAnimation.Fade) {
        action = "fade";
      } else if (this.animation === NgxGalleryAnimation.Rotate) {
        action = "rotateRight";
      } else if (this.animation === NgxGalleryAnimation.Zoom) {
        action = "zoom";
      }
      this.setAction(action);
    } else if (index < this._selectedIndex) {
      let action;
      if (this.animation === NgxGalleryAnimation.Slide) {
        action = "slideLeft";
      } else if (this.animation === NgxGalleryAnimation.Fade) {
        action = "fade";
      } else if (this.animation === NgxGalleryAnimation.Rotate) {
        action = "rotateLeft";
      } else if (this.animation === NgxGalleryAnimation.Zoom) {
        action = "zoom";
      }
      this.setAction(action);
    }
    this._selectedIndex = index;
  }
  // @HostBinding('style.display') public display = 'inline-block';
  // @HostBinding('style.background-color') public color = 'lime';
  ngOnInit() {
    if (this.arrows && this.arrowsAutoHide) {
      this.arrows = false;
    }
    if (this.autoPlay) {
      this.startAutoPlay();
    }
  }
  ngOnChanges(changes) {
    if (changes["swipe"]) {
      this.helperService.manageSwipe(this.swipe, this.elementRef, "image", () => this.showNext(), () => this.showPrev());
    }
  }
  onMouseEnter() {
    if (this.arrowsAutoHide && !this.arrows) {
      this.arrows = true;
    }
    if (this.autoPlay && this.autoPlayPauseOnHover) {
      this.stopAutoPlay();
    }
  }
  onMouseLeave() {
    if (this.arrowsAutoHide && this.arrows) {
      this.arrows = false;
    }
    if (this.autoPlay && this.autoPlayPauseOnHover) {
      this.startAutoPlay();
    }
  }
  reset(index) {
    this._selectedIndex = index;
    this.action = "none";
  }
  getImages() {
    if (!this.images) {
      return [];
    }
    if (this.lazyLoading) {
      const indexes = [this._selectedIndex];
      const prevIndex = this._selectedIndex - 1;
      if (prevIndex === -1 && this.infinityMove) {
        indexes.push(this.images.length - 1);
      } else if (prevIndex >= 0) {
        indexes.push(prevIndex);
      }
      const nextIndex = this._selectedIndex + 1;
      if (nextIndex === this.images.length && this.infinityMove) {
        indexes.push(0);
      } else if (nextIndex < this.images.length) {
        indexes.push(nextIndex);
      }
      return this.images.filter((img, i) => indexes.indexOf(i) !== -1);
    } else {
      return this.images;
    }
  }
  startAutoPlay() {
    this.stopAutoPlay();
    this.timer = setInterval(() => {
      if (!this.showNext()) {
        this._selectedIndex = -1;
        this.showNext();
      }
    }, this.autoPlayInterval);
  }
  stopAutoPlay() {
    if (this.timer) {
      clearInterval(this.timer);
    }
  }
  handleClick(event, index) {
    if (this.clickable) {
      this.imageClick.emit(index);
      event.stopPropagation();
      event.preventDefault();
    }
  }
  show(index) {
    if (this.isAnimating) {
      return;
    }
    if (index > this._selectedIndex) {
      let action;
      if (this.animation === NgxGalleryAnimation.Slide) {
        action = "slideRight";
      } else if (this.animation === NgxGalleryAnimation.Fade) {
        action = "fade";
      } else if (this.animation === NgxGalleryAnimation.Rotate) {
        action = "rotateRight";
      } else if (this.animation === NgxGalleryAnimation.Zoom) {
        action = "zoom";
      }
      this.setAction(action);
    } else {
      let action;
      if (this.animation === NgxGalleryAnimation.Slide) {
        action = "slideLeft";
      } else if (this.animation === NgxGalleryAnimation.Fade) {
        action = "fade";
      } else if (this.animation === NgxGalleryAnimation.Rotate) {
        action = "rotateLeft";
      } else if (this.animation === NgxGalleryAnimation.Zoom) {
        action = "zoom";
      }
      this.setAction(action);
    }
    this._selectedIndex = index;
    this.activeChange.emit(this._selectedIndex);
    this.setChangeTimeout();
  }
  setAction(action) {
    this.action = action;
    this.changeDetectorRef.detectChanges();
  }
  showNext() {
    if (this.isAnimating) {
      return false;
    }
    if (this.canShowNext() && this.canChangeImage) {
      let action;
      if (this.animation === NgxGalleryAnimation.Slide) {
        action = "slideRight";
      } else if (this.animation === NgxGalleryAnimation.Fade) {
        action = "fade";
      } else if (this.animation === NgxGalleryAnimation.Rotate) {
        action = "rotateRight";
      } else if (this.animation === NgxGalleryAnimation.Zoom) {
        action = "zoom";
      }
      this.setAction(action);
      this._selectedIndex++;
      if (this._selectedIndex === this.images.length) {
        this._selectedIndex = 0;
      }
      this.activeChange.emit(this._selectedIndex);
      this.setChangeTimeout();
      return true;
    } else {
      return false;
    }
  }
  showPrev() {
    if (this.isAnimating) {
      return;
    }
    if (this.canShowPrev() && this.canChangeImage) {
      let action;
      if (this.animation === NgxGalleryAnimation.Slide) {
        action = "slideLeft";
      } else if (this.animation === NgxGalleryAnimation.Fade) {
        action = "fade";
      } else if (this.animation === NgxGalleryAnimation.Rotate) {
        action = "rotateLeft";
      } else if (this.animation === NgxGalleryAnimation.Zoom) {
        action = "zoom";
      }
      this.setAction(action);
      this._selectedIndex--;
      if (this._selectedIndex < 0) {
        this._selectedIndex = this.images.length - 1;
      }
      this.activeChange.emit(this._selectedIndex);
      this.setChangeTimeout();
    }
  }
  setChangeTimeout() {
    this.canChangeImage = false;
    let timeout = 1e3;
    if (this.animation === NgxGalleryAnimation.Slide || this.animation === NgxGalleryAnimation.Fade) {
      timeout = 500;
    }
    setTimeout(() => {
      this.canChangeImage = true;
    }, timeout);
  }
  canShowNext() {
    if (this.images) {
      return this.infinityMove || this._selectedIndex < this.images.length - 1;
    } else {
      return false;
    }
  }
  canShowPrev() {
    if (this.images) {
      return this.infinityMove || this._selectedIndex > 0;
    } else {
      return false;
    }
  }
  getSafeUrl(image) {
    return this.sanitization.bypassSecurityTrustStyle(this.helperService.getBackgroundUrl(image.toString()));
  }
  getFileType(fileSource) {
    return this.helperService.getFileType(fileSource);
  }
  onStart(event) {
    this.isAnimating = true;
    this.animating.emit(true);
  }
  onDone(event) {
    this.isAnimating = false;
    this.animating.emit(false);
  }
};
NgxGalleryImageComponent.ɵfac = function NgxGalleryImageComponent_Factory(t) {
  return new (t || NgxGalleryImageComponent)(ɵɵdirectiveInject(DomSanitizer), ɵɵdirectiveInject(ChangeDetectorRef), ɵɵdirectiveInject(ElementRef), ɵɵdirectiveInject(NgxGalleryService));
};
NgxGalleryImageComponent.ɵcmp = ɵɵdefineComponent({
  type: NgxGalleryImageComponent,
  selectors: [["ngx-gallery-image"]],
  hostBindings: function NgxGalleryImageComponent_HostBindings(rf, ctx) {
    if (rf & 1) {
      ɵɵlistener("mouseenter", function NgxGalleryImageComponent_mouseenter_HostBindingHandler() {
        return ctx.onMouseEnter();
      })("mouseleave", function NgxGalleryImageComponent_mouseleave_HostBindingHandler() {
        return ctx.onMouseLeave();
      });
    }
  },
  inputs: {
    images: "images",
    clickable: "clickable",
    selectedIndex: "selectedIndex",
    arrows: "arrows",
    arrowsAutoHide: "arrowsAutoHide",
    swipe: "swipe",
    animation: "animation",
    size: "size",
    arrowPrevIcon: "arrowPrevIcon",
    arrowNextIcon: "arrowNextIcon",
    autoPlay: "autoPlay",
    autoPlayInterval: "autoPlayInterval",
    autoPlayPauseOnHover: "autoPlayPauseOnHover",
    infinityMove: "infinityMove",
    lazyLoading: "lazyLoading",
    actions: "actions",
    descriptions: "descriptions",
    showDescription: "showDescription",
    bullets: "bullets"
  },
  outputs: {
    imageClick: "imageClick",
    activeChange: "activeChange",
    animating: "animating"
  },
  features: [ɵɵNgOnChangesFeature],
  decls: 4,
  vars: 7,
  consts: [[4, "ngFor", "ngForOf"], [3, "count", "active", "bulletChange", 4, "ngIf"], [3, "class", "prevDisabled", "nextDisabled", "arrowPrevIcon", "arrowNextIcon", "prevClick", "nextClick", 4, "ngIf"], ["class", "ngx-gallery-image", 3, "ngClass", "background-image", "click", 4, "ngIf"], [1, "ngx-gallery-image", 3, "ngClass", "click"], [1, "ngx-gallery-icons-wrapper"], [3, "icon", "disabled", "titleText", "closeClick", 4, "ngFor", "ngForOf"], ["class", "ngx-gallery-image-text", 3, "innerHTML", "click", 4, "ngIf"], [3, "icon", "disabled", "titleText", "closeClick"], [1, "ngx-gallery-image-text", 3, "innerHTML", "click"], ["controls", "", 2, "width", "100%", "height", "100%", "background", "#000"], [3, "src"], [3, "count", "active", "bulletChange"], [3, "prevDisabled", "nextDisabled", "arrowPrevIcon", "arrowNextIcon", "prevClick", "nextClick"]],
  template: function NgxGalleryImageComponent_Template(rf, ctx) {
    if (rf & 1) {
      ɵɵelementStart(0, "div");
      ɵɵtemplate(1, NgxGalleryImageComponent_ng_container_1_Template, 3, 2, "ng-container", 0)(2, NgxGalleryImageComponent_ngx_gallery_bullets_2_Template, 1, 2, "ngx-gallery-bullets", 1)(3, NgxGalleryImageComponent_ngx_gallery_arrows_3_Template, 1, 7, "ngx-gallery-arrows", 2);
      ɵɵelementEnd();
    }
    if (rf & 2) {
      ɵɵclassMapInterpolate2("ngx-gallery-image-wrapper ngx-gallery-animation-", ctx.animation, " ngx-gallery-image-size-", ctx.size, "");
      ɵɵadvance();
      ɵɵproperty("ngForOf", ctx.getImages());
      ɵɵadvance();
      ɵɵproperty("ngIf", ctx.bullets);
      ɵɵadvance();
      ɵɵproperty("ngIf", ctx.arrows);
    }
  },
  dependencies: [NgxGalleryActionComponent, NgxGalleryBulletsComponent, NgxGalleryArrowsComponent, NgForOf, NgIf, NgClass],
  styles: ["[_nghost-%COMP%]{width:100%;display:inline-block;position:relative;font-size:25px}.ngx-gallery-image-wrapper[_ngcontent-%COMP%]{width:100%;height:100%;position:absolute;left:0;top:0;overflow:hidden}.ngx-gallery-image[_ngcontent-%COMP%]{background-position:center;background-repeat:no-repeat;height:100%;width:100%;position:absolute;top:0}.ngx-gallery-image-size-cover[_ngcontent-%COMP%]   .ngx-gallery-image[_ngcontent-%COMP%]{background-size:cover}.ngx-gallery-image-size-contain[_ngcontent-%COMP%]   .ngx-gallery-image[_ngcontent-%COMP%]{background-size:contain}.ngx-gallery-animation-fade[_ngcontent-%COMP%]   .ngx-gallery-image[_ngcontent-%COMP%]{left:0;opacity:1;transition:.5s ease-in-out}.ngx-gallery-animation-fade[_ngcontent-%COMP%]   .ngx-gallery-image.ngx-gallery-active[_ngcontent-%COMP%]{opacity:1}.ngx-gallery-animation-rotate[_ngcontent-%COMP%]   .ngx-gallery-image[_ngcontent-%COMP%]{transition:1s ease;transform:scale(1) rotate(0);left:0;opacity:1}.ngx-gallery-animation-zoom[_ngcontent-%COMP%]   .ngx-gallery-image[_ngcontent-%COMP%]{transition:1s ease;transform:scale(1);left:0;opacity:1}.ngx-gallery-image-text[_ngcontent-%COMP%]{width:100%;background:rgba(0,0,0,.7);padding:10px;text-align:center;color:#fff;font-size:16px;position:absolute;bottom:0;z-index:10}"],
  data: {
    animation: [trigger("animation", [
      // ...
      state("slideRight", style({})),
      state("slideLeft", style({})),
      state("fade", style({})),
      state("rotateLeft", style({})),
      state("rotateRight", style({})),
      state("zoom", style({})),
      transition("slideRight => void", [animate("500ms ease-in-out", style({
        transform: "translateX(-100%)"
      }))]),
      transition("void => slideRight", [style({
        transform: "translateX(100%)"
      }), animate("500ms ease-in-out", style({
        transform: "translateX(0)"
      }))]),
      transition("slideLeft => void", [animate("500ms ease-in-out", style({
        transform: "translateX(100%)"
      }))]),
      transition("void => slideLeft", [style({
        transform: "translateX(-100%)"
      }), animate("500ms ease-in-out", style({
        transform: "translateX(0)"
      }))]),
      transition("fade => void", [animate("500ms ease-in-out", style({
        opacity: "0"
      }))]),
      transition("void => fade", [style({
        opacity: "0"
      }), animate("500ms ease-in-out", style({
        opacity: "1"
      }))]),
      transition("rotateLeft => void", [animate("500ms ease-in-out", style({
        transform: "scale(1, 1) rotate(-90deg)",
        opacity: "0"
      }))]),
      transition("void => rotateLeft", [style({
        transform: "scale(1, 1) rotate(-90deg)",
        opacity: "0"
      }), animate("500ms ease-in-out", style({
        transform: "scale(1, 1) rotate(0deg)",
        opacity: "1"
      }))]),
      transition("rotateRight => void", [animate("500ms ease-in-out", style({
        transform: "scale(1, 1) rotate(90deg)",
        opacity: "0"
      }))]),
      transition("void => rotateRight", [style({
        transform: "scale(1, 1) rotate(90deg)",
        opacity: "0"
      }), animate("500ms ease-in-out", style({
        transform: "scale(1, 1) rotate(0deg)",
        opacity: "1"
      }))]),
      transition("zoom => void", [animate("500ms ease-in-out", style({
        transform: "scale(2.5,2.5)",
        opacity: "0"
      }))]),
      transition("void => zoom", [style({
        transform: "scale(2.5,2.5)",
        opacity: "0"
      }), animate("500ms ease-in-out", style({
        transform: "scale(1, 1)",
        opacity: "1"
      }))])
    ])]
  },
  changeDetection: 0
});
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NgxGalleryImageComponent, [{
    type: Component,
    args: [{
      selector: "ngx-gallery-image",
      changeDetection: ChangeDetectionStrategy.OnPush,
      animations: [trigger("animation", [
        // ...
        state("slideRight", style({})),
        state("slideLeft", style({})),
        state("fade", style({})),
        state("rotateLeft", style({})),
        state("rotateRight", style({})),
        state("zoom", style({})),
        transition("slideRight => void", [animate("500ms ease-in-out", style({
          transform: "translateX(-100%)"
        }))]),
        transition("void => slideRight", [style({
          transform: "translateX(100%)"
        }), animate("500ms ease-in-out", style({
          transform: "translateX(0)"
        }))]),
        transition("slideLeft => void", [animate("500ms ease-in-out", style({
          transform: "translateX(100%)"
        }))]),
        transition("void => slideLeft", [style({
          transform: "translateX(-100%)"
        }), animate("500ms ease-in-out", style({
          transform: "translateX(0)"
        }))]),
        transition("fade => void", [animate("500ms ease-in-out", style({
          opacity: "0"
        }))]),
        transition("void => fade", [style({
          opacity: "0"
        }), animate("500ms ease-in-out", style({
          opacity: "1"
        }))]),
        transition("rotateLeft => void", [animate("500ms ease-in-out", style({
          transform: "scale(1, 1) rotate(-90deg)",
          opacity: "0"
        }))]),
        transition("void => rotateLeft", [style({
          transform: "scale(1, 1) rotate(-90deg)",
          opacity: "0"
        }), animate("500ms ease-in-out", style({
          transform: "scale(1, 1) rotate(0deg)",
          opacity: "1"
        }))]),
        transition("rotateRight => void", [animate("500ms ease-in-out", style({
          transform: "scale(1, 1) rotate(90deg)",
          opacity: "0"
        }))]),
        transition("void => rotateRight", [style({
          transform: "scale(1, 1) rotate(90deg)",
          opacity: "0"
        }), animate("500ms ease-in-out", style({
          transform: "scale(1, 1) rotate(0deg)",
          opacity: "1"
        }))]),
        transition("zoom => void", [animate("500ms ease-in-out", style({
          transform: "scale(2.5,2.5)",
          opacity: "0"
        }))]),
        transition("void => zoom", [style({
          transform: "scale(2.5,2.5)",
          opacity: "0"
        }), animate("500ms ease-in-out", style({
          transform: "scale(1, 1)",
          opacity: "1"
        }))])
      ])],
      template: `<div class="ngx-gallery-image-wrapper ngx-gallery-animation-{{animation}} ngx-gallery-image-size-{{size}}">
  <ng-container *ngFor="let image of getImages(); let i = index;">

    <div *ngIf="image.type === 'image' && image.index === _selectedIndex" class="ngx-gallery-image"
         [ngClass]="{'ngx-gallery-clickable': clickable }"
         [style.background-image]="getSafeUrl(image.src)"
         (click)="handleClick($event, image.index)"
         [@animation]="action"
         (@animation.start)="onStart($event)"
         (@animation.done)="onDone($event)">
      <div class="ngx-gallery-icons-wrapper">
        <ngx-gallery-action *ngFor="let action of actions" [icon]="action.icon" [disabled]="action.disabled"
                            [titleText]="action.titleText"
                            (closeClick)="action.onClick($event, image.index)"></ngx-gallery-action>
      </div>
      <div class="ngx-gallery-image-text" *ngIf="showDescription && descriptions[image.index]"
          [innerHTML]="descriptions[image.index]" (click)="$event.stopPropagation()"></div>
    </div>

    <div *ngIf="image.type === 'video' && image.index === _selectedIndex" class="ngx-gallery-image"
         [ngClass]="{'ngx-gallery-clickable': clickable }"
         [style.background-image]="getSafeUrl(image.src)"
         (click)="handleClick($event, image.index)"
         [@animation]="action"
         (@animation.start)="onStart($event)"
         (@animation.done)="onDone($event)">
      <video controls style="width:100%; height:100%; background: #000;">
        <source [src]="image.src">
          Your browser does not support the video tag.
      </video>
      <div class="ngx-gallery-icons-wrapper">
      <ngx-gallery-action *ngFor="let action of actions" [icon]="action.icon" [disabled]="action.disabled"
                          [titleText]="action.titleText"
                          (closeClick)="action.onClick($event, image.index)"></ngx-gallery-action>
      </div>
      <div class="ngx-gallery-image-text" *ngIf="showDescription && descriptions[image.index]"
          [innerHTML]="descriptions[image.index]" (click)="$event.stopPropagation()"></div>
      </div>


  </ng-container>
  <ngx-gallery-bullets *ngIf="bullets" [count]="images.length" [active]="_selectedIndex"
                       (bulletChange)="show($event)"></ngx-gallery-bullets>
  <ngx-gallery-arrows class="ngx-gallery-image-size-{{size}}" *ngIf="arrows" (prevClick)="showPrev()"
                      (nextClick)="showNext()" [prevDisabled]="!canShowPrev()" [nextDisabled]="!canShowNext()"
                      [arrowPrevIcon]="arrowPrevIcon" [arrowNextIcon]="arrowNextIcon"></ngx-gallery-arrows>
</div>
`,
      styles: [":host{width:100%;display:inline-block;position:relative;font-size:25px}.ngx-gallery-image-wrapper{width:100%;height:100%;position:absolute;left:0;top:0;overflow:hidden}.ngx-gallery-image{background-position:center;background-repeat:no-repeat;height:100%;width:100%;position:absolute;top:0}.ngx-gallery-image-size-cover .ngx-gallery-image{background-size:cover}.ngx-gallery-image-size-contain .ngx-gallery-image{background-size:contain}.ngx-gallery-animation-fade .ngx-gallery-image{left:0;opacity:1;transition:.5s ease-in-out}.ngx-gallery-animation-fade .ngx-gallery-image.ngx-gallery-active{opacity:1}.ngx-gallery-animation-rotate .ngx-gallery-image{transition:1s ease;transform:scale(1) rotate(0);left:0;opacity:1}.ngx-gallery-animation-zoom .ngx-gallery-image{transition:1s ease;transform:scale(1);left:0;opacity:1}.ngx-gallery-image-text{width:100%;background:rgba(0,0,0,.7);padding:10px;text-align:center;color:#fff;font-size:16px;position:absolute;bottom:0;z-index:10}\n"]
    }]
  }], function() {
    return [{
      type: DomSanitizer
    }, {
      type: ChangeDetectorRef
    }, {
      type: ElementRef
    }, {
      type: NgxGalleryService
    }];
  }, {
    images: [{
      type: Input
    }],
    clickable: [{
      type: Input
    }],
    selectedIndex: [{
      type: Input
    }],
    arrows: [{
      type: Input
    }],
    arrowsAutoHide: [{
      type: Input
    }],
    swipe: [{
      type: Input
    }],
    animation: [{
      type: Input
    }],
    size: [{
      type: Input
    }],
    arrowPrevIcon: [{
      type: Input
    }],
    arrowNextIcon: [{
      type: Input
    }],
    autoPlay: [{
      type: Input
    }],
    autoPlayInterval: [{
      type: Input
    }],
    autoPlayPauseOnHover: [{
      type: Input
    }],
    infinityMove: [{
      type: Input
    }],
    lazyLoading: [{
      type: Input
    }],
    actions: [{
      type: Input
    }],
    descriptions: [{
      type: Input
    }],
    showDescription: [{
      type: Input
    }],
    bullets: [{
      type: Input
    }],
    imageClick: [{
      type: Output
    }],
    activeChange: [{
      type: Output
    }],
    animating: [{
      type: Output
    }],
    onMouseEnter: [{
      type: HostListener,
      args: ["mouseenter"]
    }],
    onMouseLeave: [{
      type: HostListener,
      args: ["mouseleave"]
    }]
  });
})();
var NgxGalleryOrder = class {
};
NgxGalleryOrder.Column = 1;
NgxGalleryOrder.Row = 2;
NgxGalleryOrder.Page = 3;
var NgxGalleryThumbnailsComponent = class {
  constructor(sanitization, elementRef, helperService) {
    this.sanitization = sanitization;
    this.elementRef = elementRef;
    this.helperService = helperService;
    this.minStopIndex = 0;
    this.activeChange = new EventEmitter();
    this.index = 0;
  }
  ngOnChanges(changes) {
    if (changes["selectedIndex"]) {
      this.validateIndex();
    }
    if (changes["swipe"]) {
      this.helperService.manageSwipe(this.swipe, this.elementRef, "thumbnails", () => this.moveRight(), () => this.moveLeft());
    }
    if (this.images) {
      this.remainingCountValue = this.images.length - this.rows * this.columns;
    }
  }
  onMouseEnter() {
    this.mouseenter = true;
  }
  onMouseLeave() {
    this.mouseenter = false;
  }
  reset(index) {
    this.selectedIndex = index;
    this.setDefaultPosition();
    this.index = 0;
    this.validateIndex();
  }
  getImages() {
    if (!this.images) {
      return [];
    }
    if (this.remainingCount) {
      return this.images.slice(0, this.rows * this.columns);
    } else if (this.lazyLoading && this.order !== NgxGalleryOrder.Row) {
      let stopIndex = 0;
      if (this.order === NgxGalleryOrder.Column) {
        stopIndex = (this.index + this.columns + this.moveSize) * this.rows;
      } else if (this.order === NgxGalleryOrder.Page) {
        stopIndex = this.index + this.columns * this.rows * 2;
      }
      if (stopIndex <= this.minStopIndex) {
        stopIndex = this.minStopIndex;
      } else {
        this.minStopIndex = stopIndex;
      }
      return this.images.slice(0, stopIndex);
    } else {
      return this.images;
    }
  }
  handleClick(event, index) {
    if (!this.hasLink(index) && !this.isAnimating) {
      this.selectedIndex = index;
      this.activeChange.emit(index);
    }
    event.stopPropagation();
    event.preventDefault();
  }
  hasLink(index) {
    return !!(this.links && this.links.length && this.links[index]);
  }
  moveRight() {
    if (this.canMoveRight()) {
      this.index += this.moveSize;
      const maxIndex = this.getMaxIndex() - this.columns;
      if (this.index > maxIndex) {
        this.index = maxIndex;
      }
      this.setThumbnailsPosition();
    }
  }
  moveLeft() {
    if (this.canMoveLeft()) {
      this.index -= this.moveSize;
      if (this.index < 0) {
        this.index = 0;
      }
      this.setThumbnailsPosition();
    }
  }
  canMoveRight() {
    return this.index + this.columns < this.getMaxIndex();
  }
  canMoveLeft() {
    return this.index !== 0;
  }
  getThumbnailLeft(index) {
    let calculatedIndex;
    if (this.order === NgxGalleryOrder.Column) {
      calculatedIndex = Math.floor(index / this.rows);
    } else if (this.order === NgxGalleryOrder.Page) {
      calculatedIndex = index % this.columns + Math.floor(index / (this.rows * this.columns)) * this.columns;
    } else if (this.order === NgxGalleryOrder.Row && this.remainingCount) {
      calculatedIndex = index % this.columns;
    } else {
      calculatedIndex = index % Math.ceil(this.images.length / this.rows);
    }
    return this.getThumbnailPosition(calculatedIndex, this.columns);
  }
  getThumbnailTop(index) {
    let calculatedIndex;
    if (this.order === NgxGalleryOrder.Column) {
      calculatedIndex = index % this.rows;
    } else if (this.order === NgxGalleryOrder.Page) {
      calculatedIndex = Math.floor(index / this.columns) - Math.floor(index / (this.rows * this.columns)) * this.rows;
    } else if (this.order === NgxGalleryOrder.Row && this.remainingCount) {
      calculatedIndex = Math.floor(index / this.columns);
    } else {
      calculatedIndex = Math.floor(index / Math.ceil(this.images.length / this.rows));
    }
    return this.getThumbnailPosition(calculatedIndex, this.rows);
  }
  getThumbnailWidth() {
    return this.getThumbnailDimension(this.columns);
  }
  getThumbnailHeight() {
    return this.getThumbnailDimension(this.rows);
  }
  setThumbnailsPosition() {
    this.thumbnailsLeft = -(100 / this.columns * this.index) + "%";
    this.thumbnailsMarginLeft = -((this.margin - (this.columns - 1) * this.margin / this.columns) * this.index) + "px";
  }
  setDefaultPosition() {
    this.thumbnailsLeft = "0px";
    this.thumbnailsMarginLeft = "0px";
  }
  canShowArrows() {
    if (this.remainingCount) {
      return false;
    } else {
      return this.arrows && this.images && this.images.length > this.getVisibleCount() && (!this.arrowsAutoHide || this.mouseenter);
    }
  }
  validateIndex() {
    if (this.images) {
      let newIndex;
      if (this.order === NgxGalleryOrder.Column) {
        newIndex = Math.floor(this.selectedIndex / this.rows);
      } else {
        newIndex = this.selectedIndex % Math.ceil(this.images.length / this.rows);
      }
      if (this.remainingCount) {
        newIndex = 0;
      }
      if (newIndex < this.index || newIndex >= this.index + this.columns) {
        const maxIndex = this.getMaxIndex() - this.columns;
        this.index = newIndex > maxIndex ? maxIndex : newIndex;
        this.setThumbnailsPosition();
      }
    }
  }
  getSafeUrl(image) {
    return this.sanitization.bypassSecurityTrustStyle(this.helperService.getBackgroundUrl(image.toString()));
  }
  getFileType(fileSource) {
    return this.helperService.getFileType(fileSource.toString());
  }
  getThumbnailPosition(index, count) {
    return this.getSafeStyle("calc(" + 100 / count * index + "% + " + (this.margin - (count - 1) * this.margin / count) * index + "px)");
  }
  getThumbnailDimension(count) {
    if (this.margin !== 0) {
      return this.getSafeStyle("calc(" + 100 / count + "% - " + (count - 1) * this.margin / count + "px)");
    } else {
      return this.getSafeStyle("calc(" + 100 / count + "% + 1px)");
    }
  }
  getMaxIndex() {
    if (this.order === NgxGalleryOrder.Page) {
      let maxIndex = Math.floor(this.images.length / this.getVisibleCount()) * this.columns;
      if (this.images.length % this.getVisibleCount() > this.columns) {
        maxIndex += this.columns;
      } else {
        maxIndex += this.images.length % this.getVisibleCount();
      }
      return maxIndex;
    } else {
      return Math.ceil(this.images.length / this.rows);
    }
  }
  getVisibleCount() {
    return this.columns * this.rows;
  }
  getSafeStyle(value) {
    return this.sanitization.bypassSecurityTrustStyle(value);
  }
};
NgxGalleryThumbnailsComponent.ɵfac = function NgxGalleryThumbnailsComponent_Factory(t) {
  return new (t || NgxGalleryThumbnailsComponent)(ɵɵdirectiveInject(DomSanitizer), ɵɵdirectiveInject(ElementRef), ɵɵdirectiveInject(NgxGalleryService));
};
NgxGalleryThumbnailsComponent.ɵcmp = ɵɵdefineComponent({
  type: NgxGalleryThumbnailsComponent,
  selectors: [["ngx-gallery-thumbnails"]],
  hostBindings: function NgxGalleryThumbnailsComponent_HostBindings(rf, ctx) {
    if (rf & 1) {
      ɵɵlistener("mouseenter", function NgxGalleryThumbnailsComponent_mouseenter_HostBindingHandler() {
        return ctx.onMouseEnter();
      })("mouseleave", function NgxGalleryThumbnailsComponent_mouseleave_HostBindingHandler() {
        return ctx.onMouseLeave();
      });
    }
  },
  inputs: {
    images: "images",
    isAnimating: "isAnimating",
    links: "links",
    labels: "labels",
    linkTarget: "linkTarget",
    columns: "columns",
    rows: "rows",
    arrows: "arrows",
    arrowsAutoHide: "arrowsAutoHide",
    margin: "margin",
    selectedIndex: "selectedIndex",
    clickable: "clickable",
    swipe: "swipe",
    size: "size",
    arrowPrevIcon: "arrowPrevIcon",
    arrowNextIcon: "arrowNextIcon",
    moveSize: "moveSize",
    order: "order",
    remainingCount: "remainingCount",
    lazyLoading: "lazyLoading",
    actions: "actions"
  },
  outputs: {
    activeChange: "activeChange"
  },
  features: [ɵɵNgOnChangesFeature],
  decls: 4,
  vars: 9,
  consts: [[1, "ngx-gallery-thumbnails"], ["class", "ngx-gallery-thumbnail", 3, "href", "target", "width", "height", "left", "top", "ngClass", "click", 4, "ngFor", "ngForOf"], [3, "prevDisabled", "nextDisabled", "arrowPrevIcon", "arrowNextIcon", "prevClick", "nextClick", 4, "ngIf"], [1, "ngx-gallery-thumbnail", 3, "href", "target", "ngClass", "click"], ["class", "ngx-gallery-thumbnail", "style", "width: 100%; height: 100%; position:absolute;", 3, "background-image", "ngClass", 4, "ngIf"], ["class", "ngx-gallery-thumbnail-video", 4, "ngIf"], [1, "ngx-gallery-icons-wrapper"], [3, "icon", "disabled", "titleText", "closeClick", 4, "ngFor", "ngForOf"], ["class", "ngx-gallery-remaining-count-overlay", 4, "ngIf"], [1, "ngx-gallery-thumbnail", 2, "width", "100%", "height", "100%", "position", "absolute", 3, "ngClass"], [1, "ngx-gallery-thumbnail-video"], [1, "ngx-gallery-thumbnail", 2, "width", "100%", "height", "100%", "position", "absolute", "left", "0", "background", "#000", 3, "ngClass"], [3, "src"], [3, "icon", "disabled", "titleText", "closeClick"], [1, "ngx-gallery-remaining-count-overlay"], [1, "ngx-gallery-remaining-count"], [3, "prevDisabled", "nextDisabled", "arrowPrevIcon", "arrowNextIcon", "prevClick", "nextClick"]],
  template: function NgxGalleryThumbnailsComponent_Template(rf, ctx) {
    if (rf & 1) {
      ɵɵelementStart(0, "div")(1, "div", 0);
      ɵɵtemplate(2, NgxGalleryThumbnailsComponent_a_2_Template, 6, 19, "a", 1);
      ɵɵelementEnd()();
      ɵɵtemplate(3, NgxGalleryThumbnailsComponent_ngx_gallery_arrows_3_Template, 1, 4, "ngx-gallery-arrows", 2);
    }
    if (rf & 2) {
      ɵɵclassMapInterpolate1("ngx-gallery-thumbnails-wrapper ngx-gallery-thumbnail-size-", ctx.size, "");
      ɵɵadvance();
      ɵɵstyleProp("transform", "translateX(" + ctx.thumbnailsLeft + ")")("margin-left", ctx.thumbnailsMarginLeft);
      ɵɵadvance();
      ɵɵproperty("ngForOf", ctx.getImages());
      ɵɵadvance();
      ɵɵproperty("ngIf", ctx.canShowArrows());
    }
  },
  dependencies: [NgxGalleryActionComponent, NgxGalleryArrowsComponent, NgForOf, NgClass, NgIf],
  styles: ['@charset "UTF-8";[_nghost-%COMP%]{width:100%;display:inline-block;position:relative;font-size:25px}.ngx-gallery-thumbnails-wrapper[_ngcontent-%COMP%]{width:100%;height:100%;position:absolute;overflow:hidden}.ngx-gallery-thumbnails[_ngcontent-%COMP%]{height:100%;width:100%;position:absolute;left:0;transform:translate(0);transition:transform .5s ease-in-out;will-change:transform}.ngx-gallery-thumbnails[_ngcontent-%COMP%]   .ngx-gallery-thumbnail[_ngcontent-%COMP%]{position:absolute;height:100%;background-position:center;background-repeat:no-repeat;text-decoration:none;border:1px double black}.ngx-gallery-thumbnails[_ngcontent-%COMP%]   .ngx-gallery-thumbnail[_ngcontent-%COMP%]   .ngx-gallery-thumbnail-video[_ngcontent-%COMP%]:after{content:"\\f144";display:block;position:absolute;background:#0000;height:100%;width:100%;left:0;top:calc(50% - 20px);font-size:40px;color:#fff;margin:0;padding:0;font-family:fontawesome;text-shadow:0px 4px 3px rgba(0,0,0,.4),0px 8px 13px rgba(0,0,0,.1),0px 18px 23px rgba(0,0,0,.1)}.ngx-gallery-thumbnails[_ngcontent-%COMP%]   .ngx-gallery-thumbnail[_ngcontent-%COMP%]   .img[_ngcontent-%COMP%]{background-size:cover;height:100%}.ngx-gallery-thumbnails[_ngcontent-%COMP%]   .ngx-gallery-thumbnail.ngx-gallery-active[_ngcontent-%COMP%]{border:1px double #cc4548}.ngx-gallery-thumbnail-size-cover[_ngcontent-%COMP%]   .ngx-gallery-thumbnails[_ngcontent-%COMP%]   .ngx-gallery-thumbnail[_ngcontent-%COMP%]{background-size:cover}.ngx-gallery-thumbnail-size-contain[_ngcontent-%COMP%]   .ngx-gallery-thumbnails[_ngcontent-%COMP%]   .ngx-gallery-thumbnail[_ngcontent-%COMP%]{background-size:contain}.ngx-gallery-remaining-count-overlay[_ngcontent-%COMP%]{width:100%;height:100%;position:absolute;left:0;top:0;background-color:#0006}.ngx-gallery-remaining-count[_ngcontent-%COMP%]{position:absolute;top:50%;left:50%;transform:translate(-50%,-50%);color:#fff;font-size:30px}'],
  changeDetection: 0
});
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NgxGalleryThumbnailsComponent, [{
    type: Component,
    args: [{
      selector: "ngx-gallery-thumbnails",
      changeDetection: ChangeDetectionStrategy.OnPush,
      template: `<div class="ngx-gallery-thumbnails-wrapper ngx-gallery-thumbnail-size-{{size}}">
  <div class="ngx-gallery-thumbnails" [style.transform]="'translateX(' + thumbnailsLeft + ')'"
       [style.marginLeft]="thumbnailsMarginLeft">
    <a [href]="hasLink(i) ? links[i] : '#'" [target]="linkTarget" class="ngx-gallery-thumbnail"
       *ngFor="let image of getImages(); let i = index;"
       (click)="handleClick($event, i)" [style.width]="getThumbnailWidth()" [style.height]="getThumbnailHeight()"
       [style.left]="getThumbnailLeft(i)" [style.top]="getThumbnailTop(i)"
       [ngClass]="{ 'ngx-gallery-active': i === selectedIndex, 'ngx-gallery-clickable': clickable }"
       [attr.aria-label]="labels[i]">
       <div *ngIf="getFileType(image) === 'image'" [style.background-image]="getSafeUrl(image)" class="ngx-gallery-thumbnail"
       [ngClass]="{ 'ngx-gallery-active': i === selectedIndex, 'ngx-gallery-clickable': clickable }"
       style="width: 100%; height: 100%; position:absolute;"></div>
       <div *ngIf="getFileType(image) === 'video'" class="ngx-gallery-thumbnail-video">
        <video  class="ngx-gallery-thumbnail" [ngClass]="{ 'ngx-gallery-active': i === selectedIndex, 'ngx-gallery-clickable': clickable }"
        style="width: 100%; height: 100%; position:absolute; left:0; background:#000;">
        <source [src]="image">
          Your browser does not support the video tag.
       </video>
      </div>
       <div class="ngx-gallery-icons-wrapper">
        <ngx-gallery-action *ngFor="let action of actions" [icon]="action.icon" [disabled]="action.disabled"
                            [titleText]="action.titleText" (closeClick)="action.onClick($event, i)"></ngx-gallery-action>
      </div>
      <div class="ngx-gallery-remaining-count-overlay"
           *ngIf="remainingCount && remainingCountValue && (i === (rows * columns) - 1)">
        <span class="ngx-gallery-remaining-count">+{{remainingCountValue}}</span>
      </div>
    </a>
  </div>
</div>
<ngx-gallery-arrows *ngIf="canShowArrows()" (prevClick)="moveLeft()" (nextClick)="moveRight()"
                    [prevDisabled]="!canMoveLeft()" [nextDisabled]="!canMoveRight()" [arrowPrevIcon]="arrowPrevIcon"
                    [arrowNextIcon]="arrowNextIcon"></ngx-gallery-arrows>
`,
      styles: ['@charset "UTF-8";:host{width:100%;display:inline-block;position:relative;font-size:25px}.ngx-gallery-thumbnails-wrapper{width:100%;height:100%;position:absolute;overflow:hidden}.ngx-gallery-thumbnails{height:100%;width:100%;position:absolute;left:0;transform:translate(0);transition:transform .5s ease-in-out;will-change:transform}.ngx-gallery-thumbnails .ngx-gallery-thumbnail{position:absolute;height:100%;background-position:center;background-repeat:no-repeat;text-decoration:none;border:1px double black}.ngx-gallery-thumbnails .ngx-gallery-thumbnail .ngx-gallery-thumbnail-video:after{content:"\\f144";display:block;position:absolute;background:#0000;height:100%;width:100%;left:0;top:calc(50% - 20px);font-size:40px;color:#fff;margin:0;padding:0;font-family:fontawesome;text-shadow:0px 4px 3px rgba(0,0,0,.4),0px 8px 13px rgba(0,0,0,.1),0px 18px 23px rgba(0,0,0,.1)}.ngx-gallery-thumbnails .ngx-gallery-thumbnail .img{background-size:cover;height:100%}.ngx-gallery-thumbnails .ngx-gallery-thumbnail.ngx-gallery-active{border:1px double #cc4548}.ngx-gallery-thumbnail-size-cover .ngx-gallery-thumbnails .ngx-gallery-thumbnail{background-size:cover}.ngx-gallery-thumbnail-size-contain .ngx-gallery-thumbnails .ngx-gallery-thumbnail{background-size:contain}.ngx-gallery-remaining-count-overlay{width:100%;height:100%;position:absolute;left:0;top:0;background-color:#0006}.ngx-gallery-remaining-count{position:absolute;top:50%;left:50%;transform:translate(-50%,-50%);color:#fff;font-size:30px}\n']
    }]
  }], function() {
    return [{
      type: DomSanitizer
    }, {
      type: ElementRef
    }, {
      type: NgxGalleryService
    }];
  }, {
    images: [{
      type: Input
    }],
    isAnimating: [{
      type: Input
    }],
    links: [{
      type: Input
    }],
    labels: [{
      type: Input
    }],
    linkTarget: [{
      type: Input
    }],
    columns: [{
      type: Input
    }],
    rows: [{
      type: Input
    }],
    arrows: [{
      type: Input
    }],
    arrowsAutoHide: [{
      type: Input
    }],
    margin: [{
      type: Input
    }],
    selectedIndex: [{
      type: Input
    }],
    clickable: [{
      type: Input
    }],
    swipe: [{
      type: Input
    }],
    size: [{
      type: Input
    }],
    arrowPrevIcon: [{
      type: Input
    }],
    arrowNextIcon: [{
      type: Input
    }],
    moveSize: [{
      type: Input
    }],
    order: [{
      type: Input
    }],
    remainingCount: [{
      type: Input
    }],
    lazyLoading: [{
      type: Input
    }],
    actions: [{
      type: Input
    }],
    activeChange: [{
      type: Output
    }],
    onMouseEnter: [{
      type: HostListener,
      args: ["mouseenter"]
    }],
    onMouseLeave: [{
      type: HostListener,
      args: ["mouseleave"]
    }]
  });
})();
var NgxGalleryAction = class {
  constructor(action) {
    this.icon = action.icon;
    this.disabled = action.disabled ? action.disabled : false;
    this.titleText = action.titleText ? action.titleText : "";
    this.onClick = action.onClick;
  }
};
var NgxGalleryLayout = class {
};
NgxGalleryLayout.ThumbnailsTop = "thumbnails-top";
NgxGalleryLayout.ThumbnailsBottom = "thumbnails-bottom";
var NgxGalleryImageSize = class {
};
NgxGalleryImageSize.Cover = "cover";
NgxGalleryImageSize.Contain = "contain";
var NgxGalleryOptions = class {
  constructor(obj) {
    const preventDefaults = obj.breakpoint === void 0 ? false : true;
    function use(source, defaultValue) {
      return obj && (source !== void 0 || preventDefaults) ? source : defaultValue;
    }
    this.breakpoint = use(obj.breakpoint, void 0);
    this.width = use(obj.width, "500px");
    this.height = use(obj.height, "400px");
    this.fullWidth = use(obj.fullWidth, false);
    this.layout = use(obj.layout, NgxGalleryLayout.ThumbnailsBottom);
    this.startIndex = use(obj.startIndex, 0);
    this.linkTarget = use(obj.linkTarget, "_blank");
    this.lazyLoading = use(obj.lazyLoading, true);
    this.image = use(obj.image, true);
    this.imagePercent = use(obj.imagePercent, 75);
    this.imageArrows = use(obj.imageArrows, true);
    this.imageArrowsAutoHide = use(obj.imageArrowsAutoHide, false);
    this.imageSwipe = use(obj.imageSwipe, false);
    this.imageAnimation = use(obj.imageAnimation, NgxGalleryAnimation.Fade);
    this.imageSize = use(obj.imageSize, NgxGalleryImageSize.Cover);
    this.imageAutoPlay = use(obj.imageAutoPlay, false);
    this.imageAutoPlayInterval = use(obj.imageAutoPlayInterval, 2e3);
    this.imageAutoPlayPauseOnHover = use(obj.imageAutoPlayPauseOnHover, false);
    this.imageInfinityMove = use(obj.imageInfinityMove, false);
    if (obj && obj.imageActions && obj.imageActions.length) {
      obj.imageActions = obj.imageActions.map((action) => new NgxGalleryAction(action));
    }
    this.imageActions = use(obj.imageActions, []);
    this.imageDescription = use(obj.imageDescription, false);
    this.imageBullets = use(obj.imageBullets, false);
    this.thumbnails = use(obj.thumbnails, true);
    this.thumbnailsColumns = use(obj.thumbnailsColumns, 4);
    this.thumbnailsRows = use(obj.thumbnailsRows, 1);
    this.thumbnailsPercent = use(obj.thumbnailsPercent, 25);
    this.thumbnailsMargin = use(obj.thumbnailsMargin, 10);
    this.thumbnailsArrows = use(obj.thumbnailsArrows, true);
    this.thumbnailsArrowsAutoHide = use(obj.thumbnailsArrowsAutoHide, false);
    this.thumbnailsSwipe = use(obj.thumbnailsSwipe, false);
    this.thumbnailsMoveSize = use(obj.thumbnailsMoveSize, 1);
    this.thumbnailsOrder = use(obj.thumbnailsOrder, NgxGalleryOrder.Column);
    this.thumbnailsRemainingCount = use(obj.thumbnailsRemainingCount, false);
    this.thumbnailsAsLinks = use(obj.thumbnailsAsLinks, false);
    this.thumbnailsAutoHide = use(obj.thumbnailsAutoHide, false);
    this.thumbnailMargin = use(obj.thumbnailMargin, 10);
    this.thumbnailSize = use(obj.thumbnailSize, NgxGalleryImageSize.Cover);
    if (obj && obj.thumbnailActions && obj.thumbnailActions.length) {
      obj.thumbnailActions = obj.thumbnailActions.map((action) => new NgxGalleryAction(action));
    }
    this.thumbnailActions = use(obj.thumbnailActions, []);
    this.thumbnailClasses = use(obj.thumbnailClasses, []);
    this.preview = use(obj.preview, true);
    this.previewDescription = use(obj.previewDescription, true);
    this.previewArrows = use(obj.previewArrows, true);
    this.previewArrowsAutoHide = use(obj.previewArrowsAutoHide, false);
    this.previewSwipe = use(obj.previewSwipe, false);
    this.previewFullscreen = use(obj.previewFullscreen, false);
    this.previewForceFullscreen = use(obj.previewForceFullscreen, false);
    this.previewCloseOnClick = use(obj.previewCloseOnClick, false);
    this.previewCloseOnEsc = use(obj.previewCloseOnEsc, false);
    this.previewKeyboardNavigation = use(obj.previewKeyboardNavigation, false);
    this.previewAnimation = use(obj.previewAnimation, true);
    this.previewAutoPlay = use(obj.previewAutoPlay, false);
    this.previewAutoPlayInterval = use(obj.previewAutoPlayInterval, 2e3);
    this.previewAutoPlayPauseOnHover = use(obj.previewAutoPlayPauseOnHover, false);
    this.previewInfinityMove = use(obj.previewInfinityMove, false);
    this.previewZoom = use(obj.previewZoom, false);
    this.previewZoomStep = use(obj.previewZoomStep, 0.1);
    this.previewZoomMax = use(obj.previewZoomMax, 2);
    this.previewZoomMin = use(obj.previewZoomMin, 0.5);
    this.previewRotate = use(obj.previewRotate, false);
    this.previewDownload = use(obj.previewDownload, false);
    this.previewCustom = use(obj.previewCustom, void 0);
    this.previewBullets = use(obj.previewBullets, false);
    this.arrowPrevIcon = use(obj.arrowPrevIcon, "fa fa-arrow-circle-left");
    this.arrowNextIcon = use(obj.arrowNextIcon, "fa fa-arrow-circle-right");
    this.closeIcon = use(obj.closeIcon, "fa fa-times-circle");
    this.fullscreenIcon = use(obj.fullscreenIcon, "fa fa-arrows-alt");
    this.spinnerIcon = use(obj.spinnerIcon, "fa fa-spinner fa-pulse fa-3x fa-fw");
    this.zoomInIcon = use(obj.zoomInIcon, "fa fa-search-plus");
    this.zoomOutIcon = use(obj.zoomOutIcon, "fa fa-search-minus");
    this.rotateLeftIcon = use(obj.rotateLeftIcon, "fa fa-undo");
    this.rotateRightIcon = use(obj.rotateRightIcon, "fa fa-repeat");
    this.downloadIcon = use(obj.downloadIcon, "fa fa-arrow-circle-down");
    if (obj && obj.actions && obj.actions.length) {
      obj.actions = obj.actions.map((action) => new NgxGalleryAction(action));
    }
    this.actions = use(obj.actions, []);
  }
};
var NgxGalleryOrderedImage = class {
  constructor(obj) {
    this.src = obj.src;
    this.type = obj.type;
    this.index = obj.index;
  }
};
var NgxGalleryComponent = class {
  constructor(myElement, helperService) {
    this.myElement = myElement;
    this.helperService = helperService;
    this.options = [{}];
    this.imagesReady = new EventEmitter();
    this.change = new EventEmitter();
    this.previewOpen = new EventEmitter();
    this.previewClose = new EventEmitter();
    this.previewChange = new EventEmitter();
    this.oldImagesLength = 0;
    this.selectedIndex = 0;
    this.breakpoint = void 0;
    this.prevBreakpoint = void 0;
  }
  ngOnInit() {
    this.options = this.options.map((opt) => new NgxGalleryOptions(opt));
    this.sortOptions();
    this.setBreakpoint();
    this.setOptions();
    this.checkFullWidth();
    if (this.currentOptions) {
      this.selectedIndex = this.currentOptions.startIndex;
    }
  }
  ngDoCheck() {
    if (this.images !== void 0 && this.images.length !== this.oldImagesLength || this.images !== this.oldImages) {
      this.oldImagesLength = this.images.length;
      this.oldImages = this.images;
      this.setOptions();
      this.setImages();
      if (this.images && this.images.length) {
        this.imagesReady.emit();
      }
      if (this.image) {
        this.image.reset(this.currentOptions.startIndex);
      }
      if (this.currentOptions.thumbnailsAutoHide && this.currentOptions.thumbnails && this.images.length <= 1) {
        this.currentOptions.thumbnails = false;
        this.currentOptions.imageArrows = false;
      }
      this.resetThumbnails();
    }
  }
  ngAfterViewInit() {
    this.checkFullWidth();
  }
  onResize() {
    this.setBreakpoint();
    if (this.prevBreakpoint !== this.breakpoint) {
      this.setOptions();
      this.resetThumbnails();
    }
    if (this.currentOptions && this.currentOptions.fullWidth) {
      if (this.fullWidthTimeout) {
        clearTimeout(this.fullWidthTimeout);
      }
      this.fullWidthTimeout = setTimeout(() => {
        this.checkFullWidth();
      }, 200);
    }
  }
  getImageHeight() {
    return this.currentOptions && this.currentOptions.thumbnails ? this.currentOptions.imagePercent + "%" : "100%";
  }
  getThumbnailsHeight() {
    if (this.currentOptions && this.currentOptions.image) {
      return "calc(" + this.currentOptions.thumbnailsPercent + "% - " + this.currentOptions.thumbnailsMargin + "px)";
    } else {
      return "100%";
    }
  }
  getThumbnailsMarginTop() {
    if (this.currentOptions && this.currentOptions.layout === NgxGalleryLayout.ThumbnailsBottom) {
      return this.currentOptions.thumbnailsMargin + "px";
    } else {
      return "0px";
    }
  }
  getThumbnailsMarginBottom() {
    if (this.currentOptions && this.currentOptions.layout === NgxGalleryLayout.ThumbnailsTop) {
      return this.currentOptions.thumbnailsMargin + "px";
    } else {
      return "0px";
    }
  }
  openPreview(index) {
    if (this.currentOptions.previewCustom) {
      this.currentOptions.previewCustom(index);
    } else {
      this.previewEnabled = true;
      this.preview.open(index);
    }
  }
  onPreviewOpen() {
    this.previewOpen.emit();
    if (this.image && this.image.autoPlay) {
      this.image.stopAutoPlay();
    }
  }
  onPreviewClose() {
    this.previewEnabled = false;
    this.previewClose.emit();
    if (this.image && this.image.autoPlay) {
      this.image.startAutoPlay();
    }
  }
  selectFromImage(index) {
    this.select(index);
  }
  selectFromThumbnails(index) {
    this.select(index);
    if (this.currentOptions && this.currentOptions.thumbnails && this.currentOptions.preview && (!this.currentOptions.image || this.currentOptions.thumbnailsRemainingCount)) {
      this.openPreview(this.selectedIndex);
    }
  }
  show(index) {
    this.select(index);
  }
  showNext() {
    this.image.showNext();
  }
  showPrev() {
    this.image.showPrev();
  }
  canShowNext() {
    if (this.images && this.currentOptions) {
      return !!(this.currentOptions.imageInfinityMove || this.selectedIndex < this.images.length - 1);
    } else {
      return false;
    }
  }
  canShowPrev() {
    if (this.images && this.currentOptions) {
      return !!(this.currentOptions.imageInfinityMove || this.selectedIndex > 0);
    } else {
      return false;
    }
  }
  previewSelect(index) {
    this.previewChange.emit({
      index,
      image: this.images[index]
    });
  }
  moveThumbnailsRight() {
    this.thumbnails.moveRight();
  }
  moveThumbnailsLeft() {
    this.thumbnails.moveLeft();
  }
  canMoveThumbnailsRight() {
    return this.thumbnails.canMoveRight();
  }
  canMoveThumbnailsLeft() {
    return this.thumbnails.canMoveLeft();
  }
  resetThumbnails() {
    if (this.thumbnails) {
      this.thumbnails.reset(this.currentOptions.startIndex);
    }
  }
  select(index) {
    this.selectedIndex = index;
    this.change.emit({
      index,
      image: this.images[index]
    });
  }
  checkFullWidth() {
    if (this.currentOptions && this.currentOptions.fullWidth) {
      this.width = document.body.clientWidth + "px";
      this.left = "translateX(" + -(document.body.clientWidth - this.myElement.nativeElement.parentNode.innerWidth) / 2 + "px)";
    }
  }
  setImages() {
    this.images.forEach((img) => img.type = this.helperService.getFileType(img.url || img.big || img.medium || img.small || ""));
    this.smallImages = this.images.map((img) => img.small);
    this.mediumImages = this.images.map((img, i) => new NgxGalleryOrderedImage({
      src: img.medium,
      type: img.type,
      index: i
    }));
    this.bigImages = this.images.map((img) => img.big);
    this.descriptions = this.images.map((img) => img.description);
    this.links = this.images.map((img) => img.url);
    this.labels = this.images.map((img) => img.label);
  }
  setBreakpoint() {
    this.prevBreakpoint = this.breakpoint;
    let breakpoints;
    if (typeof window !== "undefined") {
      breakpoints = this.options.filter((opt) => opt.breakpoint >= window.innerWidth).map((opt) => opt.breakpoint);
    }
    if (breakpoints && breakpoints.length) {
      this.breakpoint = breakpoints.pop();
    } else {
      this.breakpoint = void 0;
    }
  }
  sortOptions() {
    this.options = [...this.options.filter((a) => a.breakpoint === void 0), ...this.options.filter((a) => a.breakpoint !== void 0).sort((a, b) => b.breakpoint - a.breakpoint)];
  }
  setOptions() {
    this.currentOptions = new NgxGalleryOptions({});
    this.options.filter((opt) => opt.breakpoint === void 0 || opt.breakpoint >= this.breakpoint).map((opt) => this.combineOptions(this.currentOptions, opt));
    this.width = this.currentOptions.width;
    this.height = this.currentOptions.height;
  }
  combineOptions(first, second) {
    Object.keys(second).map((val) => first[val] = second[val] !== void 0 ? second[val] : first[val]);
  }
  setAnimating(event) {
    this.isAnimating = event;
  }
};
NgxGalleryComponent.ɵfac = function NgxGalleryComponent_Factory(t) {
  return new (t || NgxGalleryComponent)(ɵɵdirectiveInject(ElementRef), ɵɵdirectiveInject(NgxGalleryService));
};
NgxGalleryComponent.ɵcmp = ɵɵdefineComponent({
  type: NgxGalleryComponent,
  selectors: [["ngx-gallery"]],
  viewQuery: function NgxGalleryComponent_Query(rf, ctx) {
    if (rf & 1) {
      ɵɵviewQuery(NgxGalleryPreviewComponent, 5);
      ɵɵviewQuery(NgxGalleryImageComponent, 5);
      ɵɵviewQuery(NgxGalleryThumbnailsComponent, 5);
    }
    if (rf & 2) {
      let _t;
      ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.preview = _t.first);
      ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.image = _t.first);
      ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.thumbnails = _t.first);
    }
  },
  hostVars: 6,
  hostBindings: function NgxGalleryComponent_HostBindings(rf, ctx) {
    if (rf & 1) {
      ɵɵlistener("resize", function NgxGalleryComponent_resize_HostBindingHandler() {
        return ctx.onResize();
      }, false, ɵɵresolveWindow);
    }
    if (rf & 2) {
      ɵɵstyleProp("width", ctx.width)("height", ctx.height)("transform", ctx.left);
    }
  },
  inputs: {
    options: "options",
    images: "images"
  },
  outputs: {
    imagesReady: "imagesReady",
    change: "change",
    previewOpen: "previewOpen",
    previewClose: "previewClose",
    previewChange: "previewChange"
  },
  features: [ɵɵProvidersFeature([NgxGalleryService])],
  decls: 4,
  vars: 41,
  consts: [[3, "height", "images", "clickable", "selectedIndex", "arrows", "arrowsAutoHide", "arrowPrevIcon", "arrowNextIcon", "swipe", "animation", "size", "autoPlay", "autoPlayInterval", "autoPlayPauseOnHover", "infinityMove", "lazyLoading", "actions", "descriptions", "showDescription", "bullets", "imageClick", "activeChange", "animating", 4, "ngIf"], [3, "marginTop", "marginBottom", "height", "images", "isAnimating", "links", "labels", "linkTarget", "selectedIndex", "columns", "rows", "margin", "arrows", "arrowsAutoHide", "arrowPrevIcon", "arrowNextIcon", "clickable", "swipe", "size", "moveSize", "order", "remainingCount", "lazyLoading", "actions", "ngClass", "activeChange", 4, "ngIf"], [3, "images", "descriptions", "showDescription", "arrowPrevIcon", "arrowNextIcon", "closeIcon", "fullscreenIcon", "spinnerIcon", "arrows", "arrowsAutoHide", "swipe", "fullscreen", "forceFullscreen", "closeOnClick", "closeOnEsc", "keyboardNavigation", "animation", "autoPlay", "autoPlayInterval", "autoPlayPauseOnHover", "infinityMove", "zoom", "zoomStep", "zoomMax", "zoomMin", "zoomInIcon", "zoomOutIcon", "actions", "rotate", "rotateLeftIcon", "rotateRightIcon", "download", "downloadIcon", "bullets", "previewClose", "previewOpen", "activeChange"], [3, "images", "clickable", "selectedIndex", "arrows", "arrowsAutoHide", "arrowPrevIcon", "arrowNextIcon", "swipe", "animation", "size", "autoPlay", "autoPlayInterval", "autoPlayPauseOnHover", "infinityMove", "lazyLoading", "actions", "descriptions", "showDescription", "bullets", "imageClick", "activeChange", "animating"], [3, "images", "isAnimating", "links", "labels", "linkTarget", "selectedIndex", "columns", "rows", "margin", "arrows", "arrowsAutoHide", "arrowPrevIcon", "arrowNextIcon", "clickable", "swipe", "size", "moveSize", "order", "remainingCount", "lazyLoading", "actions", "ngClass", "activeChange"]],
  template: function NgxGalleryComponent_Template(rf, ctx) {
    if (rf & 1) {
      ɵɵelementStart(0, "div");
      ɵɵtemplate(1, NgxGalleryComponent_ngx_gallery_image_1_Template, 1, 21, "ngx-gallery-image", 0)(2, NgxGalleryComponent_ngx_gallery_thumbnails_2_Template, 1, 29, "ngx-gallery-thumbnails", 1);
      ɵɵelementStart(3, "ngx-gallery-preview", 2);
      ɵɵlistener("previewClose", function NgxGalleryComponent_Template_ngx_gallery_preview_previewClose_3_listener() {
        return ctx.onPreviewClose();
      })("previewOpen", function NgxGalleryComponent_Template_ngx_gallery_preview_previewOpen_3_listener() {
        return ctx.onPreviewOpen();
      })("activeChange", function NgxGalleryComponent_Template_ngx_gallery_preview_activeChange_3_listener($event) {
        return ctx.previewSelect($event);
      });
      ɵɵelementEnd()();
    }
    if (rf & 2) {
      ɵɵclassMapInterpolate1("ngx-gallery-layout ", ctx.currentOptions == null ? null : ctx.currentOptions.layout, "");
      ɵɵadvance();
      ɵɵproperty("ngIf", ctx.currentOptions == null ? null : ctx.currentOptions.image);
      ɵɵadvance();
      ɵɵproperty("ngIf", ctx.currentOptions == null ? null : ctx.currentOptions.thumbnails);
      ɵɵadvance();
      ɵɵclassProp("ngx-gallery-active", ctx.previewEnabled);
      ɵɵproperty("images", ctx.bigImages)("descriptions", ctx.descriptions)("showDescription", ctx.currentOptions == null ? null : ctx.currentOptions.previewDescription)("arrowPrevIcon", ctx.currentOptions == null ? null : ctx.currentOptions.arrowPrevIcon)("arrowNextIcon", ctx.currentOptions == null ? null : ctx.currentOptions.arrowNextIcon)("closeIcon", ctx.currentOptions == null ? null : ctx.currentOptions.closeIcon)("fullscreenIcon", ctx.currentOptions == null ? null : ctx.currentOptions.fullscreenIcon)("spinnerIcon", ctx.currentOptions == null ? null : ctx.currentOptions.spinnerIcon)("arrows", ctx.currentOptions == null ? null : ctx.currentOptions.previewArrows)("arrowsAutoHide", ctx.currentOptions == null ? null : ctx.currentOptions.previewArrowsAutoHide)("swipe", ctx.currentOptions == null ? null : ctx.currentOptions.previewSwipe)("fullscreen", ctx.currentOptions == null ? null : ctx.currentOptions.previewFullscreen)("forceFullscreen", ctx.currentOptions == null ? null : ctx.currentOptions.previewForceFullscreen)("closeOnClick", ctx.currentOptions == null ? null : ctx.currentOptions.previewCloseOnClick)("closeOnEsc", ctx.currentOptions == null ? null : ctx.currentOptions.previewCloseOnEsc)("keyboardNavigation", ctx.currentOptions == null ? null : ctx.currentOptions.previewKeyboardNavigation)("animation", ctx.currentOptions == null ? null : ctx.currentOptions.previewAnimation)("autoPlay", ctx.currentOptions == null ? null : ctx.currentOptions.previewAutoPlay)("autoPlayInterval", ctx.currentOptions == null ? null : ctx.currentOptions.previewAutoPlayInterval)("autoPlayPauseOnHover", ctx.currentOptions == null ? null : ctx.currentOptions.previewAutoPlayPauseOnHover)("infinityMove", ctx.currentOptions == null ? null : ctx.currentOptions.previewInfinityMove)("zoom", ctx.currentOptions == null ? null : ctx.currentOptions.previewZoom)("zoomStep", ctx.currentOptions == null ? null : ctx.currentOptions.previewZoomStep)("zoomMax", ctx.currentOptions == null ? null : ctx.currentOptions.previewZoomMax)("zoomMin", ctx.currentOptions == null ? null : ctx.currentOptions.previewZoomMin)("zoomInIcon", ctx.currentOptions == null ? null : ctx.currentOptions.zoomInIcon)("zoomOutIcon", ctx.currentOptions == null ? null : ctx.currentOptions.zoomOutIcon)("actions", ctx.currentOptions == null ? null : ctx.currentOptions.actions)("rotate", ctx.currentOptions == null ? null : ctx.currentOptions.previewRotate)("rotateLeftIcon", ctx.currentOptions == null ? null : ctx.currentOptions.rotateLeftIcon)("rotateRightIcon", ctx.currentOptions == null ? null : ctx.currentOptions.rotateRightIcon)("download", ctx.currentOptions == null ? null : ctx.currentOptions.previewDownload)("downloadIcon", ctx.currentOptions == null ? null : ctx.currentOptions.downloadIcon)("bullets", ctx.currentOptions == null ? null : ctx.currentOptions.previewBullets);
    }
  },
  dependencies: [NgxGalleryImageComponent, NgxGalleryThumbnailsComponent, NgxGalleryPreviewComponent, NgIf, NgClass],
  styles: [":host{display:inline-block}:host>*{float:left}.ngx-gallery-layout{width:100%;height:100%;display:flex;flex-direction:column}.ngx-gallery-layout.thumbnails-top ngx-gallery-image{order:2}.ngx-gallery-layout.thumbnails-top ngx-gallery-thumbnails{order:1}.ngx-gallery-layout.thumbnails-bottom ngx-gallery-image{order:1}.ngx-gallery-layout.thumbnails-bottom ngx-gallery-thumbnails{order:2}*{box-sizing:border-box}.ngx-gallery-icon{color:#fff;position:absolute;display:inline-block}.ngx-gallery-icon .ngx-gallery-icon-content{display:block}ngx-gallery-preview{font-size:25px}ngx-gallery-preview .ngx-gallery-icon{z-index:2000}.ngx-gallery-clickable{cursor:pointer}.ngx-gallery-icons-wrapper .ngx-gallery-icon{position:relative;margin-right:5px;margin-top:5px;font-size:20px;cursor:pointer}.ngx-gallery-icons-wrapper{float:right}\n"],
  encapsulation: 2,
  changeDetection: 0
});
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NgxGalleryComponent, [{
    type: Component,
    args: [{
      selector: "ngx-gallery",
      encapsulation: ViewEncapsulation$1.None,
      providers: [NgxGalleryService],
      changeDetection: ChangeDetectionStrategy.OnPush,
      template: '<div class="ngx-gallery-layout {{currentOptions?.layout}}">\n  <ngx-gallery-image *ngIf="currentOptions?.image" [style.height]="getImageHeight()" [images]="mediumImages"\n                     [clickable]="currentOptions?.preview" [selectedIndex]="selectedIndex"\n                     [arrows]="currentOptions?.imageArrows" [arrowsAutoHide]="currentOptions?.imageArrowsAutoHide"\n                     [arrowPrevIcon]="currentOptions?.arrowPrevIcon" [arrowNextIcon]="currentOptions?.arrowNextIcon"\n                     [swipe]="currentOptions?.imageSwipe" [animation]="currentOptions?.imageAnimation"\n                     [size]="currentOptions?.imageSize" [autoPlay]="currentOptions?.imageAutoPlay"\n                     [autoPlayInterval]="currentOptions?.imageAutoPlayInterval"\n                     [autoPlayPauseOnHover]="currentOptions?.imageAutoPlayPauseOnHover"\n                     [infinityMove]="currentOptions?.imageInfinityMove" [lazyLoading]="currentOptions?.lazyLoading"\n                     [actions]="currentOptions?.imageActions" [descriptions]="descriptions"\n                     [showDescription]="currentOptions?.imageDescription" [bullets]="currentOptions?.imageBullets"\n                     (imageClick)="openPreview($event)" (activeChange)="selectFromImage($event)" (animating)="setAnimating($event)"></ngx-gallery-image>\n\n  <ngx-gallery-thumbnails *ngIf="currentOptions?.thumbnails" [style.marginTop]="getThumbnailsMarginTop()"\n                          [style.marginBottom]="getThumbnailsMarginBottom()" [style.height]="getThumbnailsHeight()"\n                          [images]="smallImages" [isAnimating]="isAnimating" [links]="currentOptions?.thumbnailsAsLinks ? links : []"\n                          [labels]="labels" [linkTarget]="currentOptions?.linkTarget" [selectedIndex]="selectedIndex"\n                          [columns]="currentOptions?.thumbnailsColumns" [rows]="currentOptions?.thumbnailsRows"\n                          [margin]="currentOptions?.thumbnailMargin" [arrows]="currentOptions?.thumbnailsArrows"\n                          [arrowsAutoHide]="currentOptions?.thumbnailsArrowsAutoHide"\n                          [arrowPrevIcon]="currentOptions?.arrowPrevIcon"\n                          [arrowNextIcon]="currentOptions?.arrowNextIcon"\n                          [clickable]="currentOptions?.image || currentOptions?.preview"\n                          [swipe]="currentOptions?.thumbnailsSwipe" [size]="currentOptions?.thumbnailSize"\n                          [moveSize]="currentOptions?.thumbnailsMoveSize" [order]="currentOptions?.thumbnailsOrder"\n                          [remainingCount]="currentOptions?.thumbnailsRemainingCount"\n                          [lazyLoading]="currentOptions?.lazyLoading" [actions]="currentOptions?.thumbnailActions"\n                          (activeChange)="selectFromThumbnails($event)" [ngClass]="currentOptions?.thumbnailClasses"></ngx-gallery-thumbnails>\n\n  <ngx-gallery-preview [images]="bigImages" [descriptions]="descriptions"\n                       [showDescription]="currentOptions?.previewDescription"\n                       [arrowPrevIcon]="currentOptions?.arrowPrevIcon" [arrowNextIcon]="currentOptions?.arrowNextIcon"\n                       [closeIcon]="currentOptions?.closeIcon" [fullscreenIcon]="currentOptions?.fullscreenIcon"\n                       [spinnerIcon]="currentOptions?.spinnerIcon" [arrows]="currentOptions?.previewArrows"\n                       [arrowsAutoHide]="currentOptions?.previewArrowsAutoHide" [swipe]="currentOptions?.previewSwipe"\n                       [fullscreen]="currentOptions?.previewFullscreen"\n                       [forceFullscreen]="currentOptions?.previewForceFullscreen"\n                       [closeOnClick]="currentOptions?.previewCloseOnClick"\n                       [closeOnEsc]="currentOptions?.previewCloseOnEsc"\n                       [keyboardNavigation]="currentOptions?.previewKeyboardNavigation"\n                       [animation]="currentOptions?.previewAnimation" [autoPlay]="currentOptions?.previewAutoPlay"\n                       [autoPlayInterval]="currentOptions?.previewAutoPlayInterval"\n                       [autoPlayPauseOnHover]="currentOptions?.previewAutoPlayPauseOnHover"\n                       [infinityMove]="currentOptions?.previewInfinityMove" [zoom]="currentOptions?.previewZoom"\n                       [zoomStep]="currentOptions?.previewZoomStep" [zoomMax]="currentOptions?.previewZoomMax"\n                       [zoomMin]="currentOptions?.previewZoomMin" [zoomInIcon]="currentOptions?.zoomInIcon"\n                       [zoomOutIcon]="currentOptions?.zoomOutIcon" [actions]="currentOptions?.actions"\n                       [rotate]="currentOptions?.previewRotate" [rotateLeftIcon]="currentOptions?.rotateLeftIcon"\n                       [rotateRightIcon]="currentOptions?.rotateRightIcon" [download]="currentOptions?.previewDownload"\n                       [downloadIcon]="currentOptions?.downloadIcon" [bullets]="currentOptions?.previewBullets"\n                       (previewClose)="onPreviewClose()" (previewOpen)="onPreviewOpen()"\n                       (activeChange)="previewSelect($event)"\n                       [class.ngx-gallery-active]="previewEnabled"></ngx-gallery-preview>\n</div>\n',
      styles: [":host{display:inline-block}:host>*{float:left}.ngx-gallery-layout{width:100%;height:100%;display:flex;flex-direction:column}.ngx-gallery-layout.thumbnails-top ngx-gallery-image{order:2}.ngx-gallery-layout.thumbnails-top ngx-gallery-thumbnails{order:1}.ngx-gallery-layout.thumbnails-bottom ngx-gallery-image{order:1}.ngx-gallery-layout.thumbnails-bottom ngx-gallery-thumbnails{order:2}*{box-sizing:border-box}.ngx-gallery-icon{color:#fff;position:absolute;display:inline-block}.ngx-gallery-icon .ngx-gallery-icon-content{display:block}ngx-gallery-preview{font-size:25px}ngx-gallery-preview .ngx-gallery-icon{z-index:2000}.ngx-gallery-clickable{cursor:pointer}.ngx-gallery-icons-wrapper .ngx-gallery-icon{position:relative;margin-right:5px;margin-top:5px;font-size:20px;cursor:pointer}.ngx-gallery-icons-wrapper{float:right}\n"]
    }]
  }], function() {
    return [{
      type: ElementRef
    }, {
      type: NgxGalleryService
    }];
  }, {
    options: [{
      type: Input
    }],
    images: [{
      type: Input
    }],
    imagesReady: [{
      type: Output
    }],
    change: [{
      type: Output
    }],
    previewOpen: [{
      type: Output
    }],
    previewClose: [{
      type: Output
    }],
    previewChange: [{
      type: Output
    }],
    preview: [{
      type: ViewChild,
      args: [NgxGalleryPreviewComponent]
    }],
    image: [{
      type: ViewChild,
      args: [NgxGalleryImageComponent]
    }],
    thumbnails: [{
      type: ViewChild,
      args: [NgxGalleryThumbnailsComponent]
    }],
    width: [{
      type: HostBinding,
      args: ["style.width"]
    }],
    height: [{
      type: HostBinding,
      args: ["style.height"]
    }],
    left: [{
      type: HostBinding,
      args: ["style.transform"]
    }],
    onResize: [{
      type: HostListener,
      args: ["window:resize"]
    }]
  });
})();
var CustomHammerConfig = class extends HammerGestureConfig {
  constructor() {
    super(...arguments);
    this.overrides = {
      pinch: {
        enable: false
      },
      rotate: {
        enable: false
      }
    };
  }
};
CustomHammerConfig.ɵfac = /* @__PURE__ */ (() => {
  let ɵCustomHammerConfig_BaseFactory;
  return function CustomHammerConfig_Factory(t) {
    return (ɵCustomHammerConfig_BaseFactory || (ɵCustomHammerConfig_BaseFactory = ɵɵgetInheritedFactory(CustomHammerConfig)))(t || CustomHammerConfig);
  };
})();
CustomHammerConfig.ɵprov = ɵɵdefineInjectable({
  token: CustomHammerConfig,
  factory: CustomHammerConfig.ɵfac
});
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(CustomHammerConfig, [{
    type: Injectable
  }], null, null);
})();
var NgxGalleryModule = class {
};
NgxGalleryModule.ɵfac = function NgxGalleryModule_Factory(t) {
  return new (t || NgxGalleryModule)();
};
NgxGalleryModule.ɵmod = ɵɵdefineNgModule({
  type: NgxGalleryModule,
  declarations: [NgxGalleryComponent, NgxGalleryImageComponent, NgxGalleryArrowsComponent, NgxGalleryThumbnailsComponent, NgxGalleryPreviewComponent, NgxGalleryActionComponent, NgxGalleryBulletsComponent],
  imports: [CommonModule],
  exports: [NgxGalleryComponent]
});
NgxGalleryModule.ɵinj = ɵɵdefineInjector({
  providers: [{
    provide: HAMMER_GESTURE_CONFIG,
    useClass: CustomHammerConfig
  }],
  imports: [[CommonModule]]
});
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NgxGalleryModule, [{
    type: NgModule,
    args: [{
      declarations: [NgxGalleryComponent, NgxGalleryImageComponent, NgxGalleryArrowsComponent, NgxGalleryThumbnailsComponent, NgxGalleryPreviewComponent, NgxGalleryActionComponent, NgxGalleryBulletsComponent],
      imports: [CommonModule],
      exports: [NgxGalleryComponent],
      providers: [{
        provide: HAMMER_GESTURE_CONFIG,
        useClass: CustomHammerConfig
      }]
    }]
  }], null, null);
})();
var NgxGalleryImage = class {
  constructor(obj) {
    this.small = obj.small;
    this.medium = obj.medium;
    this.big = obj.big;
    this.description = obj.description;
    this.url = obj.url;
    this.type = obj.type;
    this.label = obj.label;
  }
};
export {
  CustomHammerConfig,
  NgxGalleryAction,
  NgxGalleryAnimation,
  NgxGalleryArrowsComponent,
  NgxGalleryBulletsComponent,
  NgxGalleryComponent,
  NgxGalleryImage,
  NgxGalleryImageSize,
  NgxGalleryLayout,
  NgxGalleryModule,
  NgxGalleryOptions,
  NgxGalleryOrder,
  NgxGalleryOrderedImage,
  NgxGalleryPreviewComponent,
  NgxGalleryService,
  NgxGalleryThumbnailsComponent
};
//# sourceMappingURL=@kolkov_ngx-gallery.js.map
