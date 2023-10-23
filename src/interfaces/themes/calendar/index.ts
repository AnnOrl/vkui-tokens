import {ThemeCssVars} from '@/interfaces/general';
import {
	ColorDescription,
	ColorsDescriptionStruct,
	ColorWithStates,
} from '@/interfaces/general/colors';
import {Adaptive} from '@/interfaces/general/tools';
import {Font} from '@/interfaces/general/typography';
import {LocalParadigmColorsDescriptionStruct} from '@/interfaces/namespaces/paradigm';
import {
	ThemeParadigmBase,
	ThemeParadigmBaseDescription,
} from '@/interfaces/themes/paradigmBase';

export interface ThemeCalendarOverValues {
	calendarFontTextEvent: Adaptive<Font>;
	calendarFontTextEventSmall: Adaptive<Font>;
}

export interface LocalCalendarColorDescriptionStruct {
	calendarColorBackgroundAccentTintThemed: ColorDescription;

	// Категории событий
	calendarColorIconUnread: ColorDescription;
	calendarColorIconFavorite: ColorDescription;
	calendarColorIconOrder: ColorDescription;
	calendarColorIconFinance: ColorDescription;
	calendarColorIconRegistration: ColorDescription;
	calendarColorIconTravel: ColorDescription;
	calendarColorIconEvent: ColorDescription;
	calendarColorIconFees: ColorDescription;
}

export type CalendarLocalColors = {
	[key in keyof LocalCalendarColorDescriptionStruct]: ColorWithStates;
};

export interface ThemeCalendar
	extends ThemeParadigmBase,
		ThemeCalendarOverValues,
		CalendarLocalColors {}

export interface ThemeCalendarDescription
	extends ThemeParadigmBaseDescription,
		ThemeCalendarOverValues {
	colors: LocalCalendarColorDescriptionStruct &
		LocalParadigmColorsDescriptionStruct &
		ColorsDescriptionStruct;
}

export interface ThemeCalendarCssVars
	extends ThemeCssVars<ThemeCalendar, 'breakpoints'> {}
