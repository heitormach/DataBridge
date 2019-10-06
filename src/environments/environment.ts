// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  apiUrl: 'https://databridge-api.herokuapp.com',
  carregando: 'data:image/gif;base64,R0lGODlh3ADcAKIEAMnJydfX17y8vOTk5P///wAAAAAAAAAAACH/C05FVFNDQVBFMi4wAwEAAAAh/wtYTVAgRGF0YVhNUDw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNi1jMDY3IDc5LjE1Nzc0NywgMjAxNS8wMy8zMC0yMzo0MDo0MiAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wTU09Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9tbS8iIHhtbG5zOnN0UmVmPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VSZWYjIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtcE1NOk9yaWdpbmFsRG9jdW1lbnRJRD0ieG1wLmRpZDpiOTI3OWQwNC00YTNjLTBkNDUtYTk3NS02NTA1ZTc0ZTAxMDYiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6NzJCNkIwQzMyQkEyMTFFNTk4MjI4NjU1MjYxOUY5Q0YiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6NzJCNkIwQzIyQkEyMTFFNTk4MjI4NjU1MjYxOUY5Q0YiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIDIwMTUgKFdpbmRvd3MpIj4gPHhtcE1NOkRlcml2ZWRGcm9tIHN0UmVmOmluc3RhbmNlSUQ9InhtcC5paWQ6Y2FkY2RmOTQtODA1NC1hNDQ3LWE2MGMtM2NmNWIwNjU0ZmFiIiBzdFJlZjpkb2N1bWVudElEPSJhZG9iZTpkb2NpZDpwaG90b3Nob3A6MTA1MDM3ZTAtMmJhMS0xMWU1LTgzMjAtOGE0YTVlNGUyMmUyIi8+IDwvcmRmOkRlc2NyaXB0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',
  // tslint:disable-next-line: max-line-length
  falha: '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',
  base64: 'data:image/gif;base64,'
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
