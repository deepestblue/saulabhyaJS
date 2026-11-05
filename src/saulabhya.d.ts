export type ISO15924ScriptCode = "Deva" | "Gran" | "Knda" | "Latn" | "Mlym" | "Taml" | "Telu";

export interface TransliterationOptions {
    vedicAccents?: "samaveda" | "yajurveda" | undefined;
    omInISO15919?: string | undefined;
    modifiedISO15919ForTam?: boolean | undefined;
    enableDiphthongsInTamil?: boolean | undefined;
}

export const transliterate: (sourceScript: ISO15924ScriptCode, targetScript: ISO15924ScriptCode, sourceText: string, options?: Readonly<TransliterationOptions>,) => string;
