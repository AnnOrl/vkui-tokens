import {Property} from 'csstype';

import {
	Theme,
	ThemeCssVars,
	ThemeCssVarsWide,
	ThemeDescription,
} from '@/interfaces/general';
import {
	ColorDescription,
	ColorsDescriptionStruct,
	ColorWithStates,
} from '@/interfaces/general/colors';
import {Adaptive, Breakpoints} from '@/interfaces/general/tools';
import {CustomMediaByViewport} from '@/interfaces/general/tools/customMedia';
import {
	DefaultViewports,
	ViewportsTuple,
} from '@/interfaces/general/tools/viewports';
import {Font} from '@/interfaces/general/typography';

export interface LocalParadigmColorsDescriptionStruct {
	colorButtonContrast: ColorDescription;
	colorButtonContrastAlpha: ColorDescription;
	colorRating: ColorDescription;
	colorThumbErrorBackgroundAlpha: ColorDescription;

	/**
	 * @desc Тонированный акцентный фон с прозрачностью меняется на белый в темной теме
	 * @tags color,background,alpha,themed
	 */
	colorBackgroundAccentTintThemedAlpha: ColorDescription;
	/**
	 * @desc Тонированный акцентный фон с прозрачностью
	 * @tags color,background,alpha
	 */
	colorBackgroundAccentTintAlpha: ColorDescription;
	colorBackgroundAccentTintThemed: ColorDescription;
	colorBackgroundWarningTintThemedAlpha: ColorDescription;
	colorBackgroundWarningTintAlpha: ColorDescription;
	colorBackgroundWarningTintThemed: ColorDescription;
	colorBackgroundWarningTint: ColorDescription;
	colorBackgroundNegativeTintThemedAlpha: ColorDescription;
	colorBackgroundNegativeTintAlpha: ColorDescription;
	colorBackgroundNegativeTintThemed: ColorDescription;
	colorBackgroundPositiveTintThemedAlpha: ColorDescription;
	colorBackgroundPositiveTintAlpha: ColorDescription;
	colorBackgroundPositiveTintThemed: ColorDescription;
}

export type ParadigmLocalColors = {
	[key in keyof LocalParadigmColorsDescriptionStruct]: ColorWithStates;
};

// кажется, половина переменных тут вообще не нужны или не используются
// @todo перевьюить их с Зубановым
export interface ParadigmLocalSizes {
	sizeArrowHeight: number;
	sizeArrowWidth: number;
	sizeBasePadding: number;
	/**
	 * @desc Legacy
	 * @tags size,legacy
	 * @deprecated
	 */
	sizeBorderWidthTab: number;
	sizeBorderWidthBar: number;
	sizeBorderWidthAccent: number;
	sizeBorderWidthAccentSecondary: number;
	sizeControlButtonWidthMin: number;
	sizePromoButtonClose: number;
	sizeButtonSliderHeight: number;
	sizeButtonSliderWidth: number;
	sizeButtonSliderWidthPointer: number;
	sizeFieldWidthMin: number;
	sizeLabelWidth: number;
	sizeProgress: number;
	sizeProgressScroll: number;
	sizeDotBullet: number;
	sizeDotIndicate: number;
	sizeDotClickable: number;
	sizeVerticalPadding: number;
	sizeButtonMorePadding: number;
	sizeIconMorePadding: number;
	sizeButtonIconPadding: number;
	sizeDivPadding: number;
	sizeMenuPadding: number;
	sizeTagPadding: number;
	sizeTabPadding: number;
	sizeTableHorizontalPadding: number;
	sizeTableVerticalPadding: number;
	sizeSliceTopPadding: number;
	sizeSliceBottomPadding: number;
	sizeBaseMargin: number;
	sizeLabelVerticalMargin: number;
	sizeTipMargin: number;
	sizeFieldHorizontalMargin: number;
	sizeFieldVerticalMargin: number;
	sizeFieldSetMargin: number;
	sizeIconMargin: number;
	sizeChoiceMargin: number;
	sizeMenuMargin: number;
	sizeTagMargin: number;
	sizeTabMargin: number;
	sizeBulletMargin: number;
	sizeAttributeMargin: number;
	sizePopupMargin: number;
	sizeHeaderIcon: number;
	sizeWysiwygIcon: number;
	sizeIllustrationS: number;
	sizeIllustrationXM: number;
	sizeIllustrationM: number;
	sizeIllustrationL: number;
	sizeIllustrationXXL: number;
}

export interface ParadigmToneValues {
	/**
	 * @desc Legacy. Значение прозрачности
	 * @tags legacy
	 * @deprecated
	 */
	toneValueOverlay: number;
	toneValueViewer: number;
	toneValueToolbar: number;
	toneValueHover: number;
	toneValueActive: number;
	toneValueFocus: number;
}

export interface ParadigmBorders {
	/**
	 * @desc Legacy
	 * @tags legacy
	 * @deprecated
	 */
	typeBorderButton: Property.BorderStyle;
	typeBorderPosition: Property.BorderStyle;
}

// todo удалить и заменить на контекстные токены в проектах
export interface ParadigmLocalFonts {
	// большие шрифты
	/**
	 * @desc Legacy. Крупный заголовок из темы Paradigm
	 * @tags font
	 * @deprecated
	 */
	fontH0: Font;
	fontH1: Font;
	fontH2: Font;
}

export interface ParadigmHelpers {
	/**
	 * @desc Legacy
	 * @tags legacy,size
	 * @deprecated
	 */
	sizeBase: number;
	sizeGrid: number;
	x0: number;
	x025: number;
	x05: number;
	x1: number;
	x2: number;
	x3: number;
	x4: number;
	x5: number;
	x6: number;
	x8: number;
	x10: number;
	x12: number;
	x15: number;
	x20: number;
}

interface AdaptiveValues extends ParadigmLocalFonts, ParadigmLocalSizes {}
type ParadigmAdaptiveTokens = {
	[key in keyof AdaptiveValues]: Adaptive<AdaptiveValues[key]>;
};

export interface ParadigmThemeDescription<
	Vt extends ViewportsTuple = DefaultViewports,
> extends ThemeDescription,
		ParadigmAdaptiveTokens,
		ParadigmToneValues,
		ParadigmBorders,
		ParadigmHelpers,
		Breakpoints<Vt> {
	colors: LocalParadigmColorsDescriptionStruct & ColorsDescriptionStruct;
}

interface ParadigmThemeStatic<Vt extends ViewportsTuple = DefaultViewports>
	extends Theme,
		Breakpoints<Vt>,
		ParadigmAdaptiveTokens,
		ParadigmToneValues,
		ParadigmBorders,
		ParadigmHelpers,
		ParadigmLocalColors {}

export type ParadigmTheme<Vt extends ViewportsTuple = DefaultViewports> =
	ParadigmThemeStatic<Vt> & CustomMediaByViewport<Vt>;

export type ParadigmThemeCssVarsWide<
	Vt extends ViewportsTuple = DefaultViewports,
> = ThemeCssVarsWide<ParadigmTheme<Vt>, 'breakpoints'>;

export type ParadigmThemeCssVars<
	Vt extends ViewportsTuple = DefaultViewports,
	T extends Breakpoints<Vt> = ParadigmTheme<Vt>,
> = ThemeCssVars<T, 'breakpoints'>;
