export interface terecero {
  "BeneficiarioId": number,
  "BeneficiarioDocumento": string,
  "BeneficiarioPrimerNombre": string,
  "BeneficiarioSegundoNombre": string,
  "BeneficiarioPrimerApellido": string,
  "BeneficiarioSegundoApellido": string
}

export interface consultarProc {
  "fecha":string,
  "identificacion":string,
  "usuario":string,
  "indasoespecial":string
}

export interface resPro{
  "CertIngRetCod": number,
  "CertIngRetCon": string,
  "CertIngRetDes": string,
  "CertIngRetCta": string,
  "CertIngRetSal": number,
  "CertIngRetBasGra": number,
  "CertIngRetBasNoGra": number,
  "CertIngRetValDev": number,
  "CertIngRetValRet": number,
  "CertIngRetIntPag": number,
  "CertIngRetUsu": string,
  "CertIngRetSec": number,
  "CertIngRetIde": string,
  "CertIngRetVig": number
}

