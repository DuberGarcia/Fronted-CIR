import type { HttpInterceptorFn } from '@angular/common/http';
import { inject } from '@angular/core';
import { LoadingService } from '../services/loading.service';
import { finalize } from 'rxjs';

export const loaderInterceptor: HttpInterceptorFn = (req, next) => {
  const loadservice=inject(LoadingService)
  loadservice.show();
  

  return next(req).pipe(
    
    finalize(() =>  loadservice.hide())
  );
};
