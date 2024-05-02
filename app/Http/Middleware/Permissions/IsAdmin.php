<?php

namespace App\Http\Middleware\Permissions;

use Closure;
use App\Providers\RouteServiceProvider;
use Illuminate\Support\Facades\Auth;

class IsAdmin
{
    /**
     * Handle an incoming request.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \Closure  $next
     * @return mixed
     */
    public function handle($request, Closure $next)
    {
        if (Auth::user()->role == "admin")
            return $next($request);
        else return abort(401);
    }
}
