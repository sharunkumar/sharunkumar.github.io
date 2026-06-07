import cvData from "../data/cv.json";
import type { CV } from "./types";

export const cv = cvData as CV;

export const basics = cv.basics;
export const work = cv.work;
export const education = cv.education;
export const volunteer = cv.volunteer ?? [];
export const certificates = cv.certificates ?? [];
export const certificatesShow = cv.certificates_show ?? false;
export const languages = cv.languages ?? [];
export const interests = cv.interests ?? [];
export const references = cv.references ?? [];
export const projectUrls = cv.projects ?? [];
