/*!
 * Fotorama 4.6.4 | http://fotorama.io/license/
 */
var fotoramaVersion;
fotoramaVersion = "4.6.4",
    function ( a, b, c, d, e ) {
        "use strict";

        function f( a ) {
            var b = "bez_"
                + d.makeArray( arguments ).join( "_" ).replace( ".", "p" );
            if ( "function" !== typeof d.easing[ b ] ) {
                var c         = function ( a, b ) {
                    var c    = [ null, null ],
                        d    = [ null, null ],
                        e    = [ null, null ],
                        f    = function ( f, g ) {
                            return e[ g ] = 3 * a[ g ], d[ g ] = 3 * ( b[ g ] - a[ g ] )
                                - e[ g ], c[ g ] = 1 - e[ g ] - d[ g ], f * ( e[ g ] + f * ( d[ g ] + f * c[ g ] ) )
                        }, g = function ( a ) {
                            return e[ 0 ] + a * ( 2 * d[ 0 ] + 3 * c[ 0 ] * a )
                        }, h = function ( a ) {
                            for ( var b, c = a, d = 0; ++ d < 14 && ( b = f( c, 0 )
                                - a, ! ( Math.abs( b ) < .001 ) ); )
                                c -= b / g( c );
                            return c;
                        };
                    return function ( a ) {
                        return f( h( a ), 1 );
                    };
                };
                d.easing[ b ] = function ( b, d, e, f, g ) {
                    return f * c( [ a[ 0 ], a[ 1 ] ], [ a[ 2 ], a[ 3 ] ] )( d / g ) + e;
                };
            }
            return b;
        }

        function g() {
        }

        function h( a, b, c ) {
            return Math.max(
                isNaN( b ) ? - 1 / 0 : b, Math.min(
                    isNaN( c ) ? 1
                    / 0 :
                        c, a
                )
            );
        }

        function i( a ) {
            return a.match( /ma/ ) && a.match( /-?\d+(?!d)/g )[ a.match( /3d/ ) ?
                    12 :
                    4 ];
        }

        function j( a ) {
            return Ic ? + i( a.css( "transform" ) ) :
                + a.css( "left" ).replace( "px", "" );
        }

        function k( a ) {
            var b = {};
            return Ic ? b.transform = "translate3d(" + a + "px,0,0)" : b.left = a, b;
        }

        function l( a ) {
            return {
                "transition-duration": a + "ms"
            };
        }

        function m( a, b ) {
            return isNaN( a ) ? b : a;
        }

        function n( a, b ) {
            return m( + String( a ).replace( b || "px", "" ) );
        }

        function o( a ) {
            return /%$/.test( a ) ? n( a, "%" ) : e;
        }

        function p( a, b ) {
            return m( o( a ) / 100 * b, n( a ) );
        }

        function q( a ) {
            return ( ! isNaN( n( a ) ) || ! isNaN( n( a, "%" ) ) ) && a;
        }

        function r( a, b, c, d ) {
            return ( a - ( d || 0 ) ) * ( b + ( c || 0 ) );
        }

        function s( a, b, c, d ) {
            return - Math.round( a / ( b + ( c || 0 ) ) - ( d || 0 ) );
        }

        function t( a ) {
            var b = a.data();
            if ( ! b.tEnd ) {
                var c = a[ 0 ],
                    d = {
                        WebkitTransition: "webkitTransitionEnd",
                        MozTransition   : "transitionend",
                        OTransition     : "oTransitionEnd otransitionend",
                        msTransition    : "MSTransitionEnd",
                        transition      : "transitionend"
                    };
                T(
                    c, d[ uc.prefixed( "transition" ) ], function ( a ) {
                        b.tProp && a.propertyName.match( b.tProp ) && b.onEndFn();
                    }
                ), b.tEnd = ! 0;
            }
        }

        function u( a, b, c, d ) {
            var e, f = a.data();
            f && ( f.onEndFn = function () {
                e || ( e = ! 0, clearTimeout( f.tT ), c() )
            }, f.tProp = b, clearTimeout( f.tT ), f.tT = setTimeout(
                function () {
                    f.onEndFn();
                }, 1.5 * d
            ), t( a ) );
        }

        function v( a, b ) {
            if ( a.length ) {
                var c = a.data();
                Ic ? ( a.css( l( 0 ) ), c.onEndFn = g, clearTimeout( c.tT ) ) :
                    a.stop();
                var d = w(
                    b, function () {
                        return j( a )
                    }
                );
                return a.css( k( d ) ), d
            }
        }

        function w() {
            for ( var a, b = 0, c = arguments.length; c > b && ( a =
                b ? arguments[ b ]() : arguments[ b ], "number" != typeof a ); b ++ )
                ;
            return a
        }

        function x( a, b ) {
            return Math.round( a + ( b - a ) / 1.5 )
        }

        function y() {
            return y.p = y.p || ( "https:" === c.protocol ? "https://" :
                    "http://" ), y.p
        }

        function z( a ) {
            var c = b.createElement( "a" );
            return c.href = a, c
        }

        function A( a, b ) {
            if ( "string" != typeof a ) {
                return a;
            }
            a = z( a );
            var c, d;
            if ( a.host.match( /youtube\.com/ ) && a.search ) {
                if ( c = a.search.split( "v=" )[ 1 ] ) {
                    var e = c.indexOf( "&" );
                    - 1 !== e && ( c = c.substring( 0, e ) ), d = "youtube"
                }
            }
            else {
                a.host.match( /youtube\.com|youtu\.be/ ) ?
                    ( c =
                        a.pathname.replace( /^\/(embed\/|v\/)?/, "" ).replace( /\/.*/, "" ), d =
                        "youtube" ) :
                a.host.match( /vimeo\.com/ ) && ( d = "vimeo", c =
                    a.pathname.replace( /^\/(video\/)?/, "" ).replace( /\/.*/, "" ) );
            }
            return c && d || ! b || ( c = a.href, d = "custom" ), c ? {
                id  : c,
                type: d,
                s   : a.search.replace( /^\?/, "" ),
                p   : y()
            } : ! 1
        }

        function B( a, b, c ) {
            var e, f, g = a.video;
            return "youtube" === g.type ?
                ( f = y() + "img.youtube.com/vi/" + g.id + "/default.jpg", e =
                    f.replace( /\/default.jpg$/, "/hqdefault.jpg" ), a.thumbsReady = ! 0 ) :
                "vimeo" === g.type ? d.ajax(
                    {
                        url     : y() + "vimeo.com/api/v2/video/" + g.id + ".json",
                        dataType: "jsonp",
                        success : function ( d ) {
                            a.thumbsReady = ! 0, C(
                                b, {
                                    img  : d[ 0 ].thumbnail_large,
                                    thumb: d[ 0 ].thumbnail_small
                                }, a.i, c
                            )
                        }
                    }
                ) : a.thumbsReady = ! 0, {
                img  : e,
                thumb: f
            }
        }

        function C( a, b, c, e ) {
            for ( var f = 0, g = a.length; g > f; f ++ ) {
                var h = a[ f ];
                if ( h.i === c && h.thumbsReady ) {
                    var i = {
                        videoReady: ! 0
                    };
                    i[ Xc ] = i[ Zc ] = i[ Yc ] = ! 1, e.splice( f, 1, d.extend( {}, h, i, b ) );
                    break
                }
            }
        }

        function D( a ) {
            function b( a, b, e ) {
                var f = a.children( "img" ).eq( 0 ),
                    g = a.attr( "href" ),
                    h = a.attr( "src" ),
                    i = f.attr( "src" ),
                    j = b.video,
                    k = e ? A( g, j === ! 0 ) : ! 1;
                k ? g = ! 1 : k = j, c(
                    a, f, d.extend(
                        b, {
                            video: k,
                            img  : b.img || g || h || i,
                            thumb: b.thumb || i || h || g
                        }
                    )
                )
            }

            function c( a, b, c ) {
                var e = c.thumb && c.img !== c.thumb,
                    f = n( c.width || a.attr( "width" ) ),
                    g = n( c.height || a.attr( "height" ) );
                d.extend(
                    c, {
                        width     : f,
                        height    : g,
                        thumbratio: S(
                            c.thumbratio || n(
                                c.thumbwidth || b
                                && b.attr( "width" ) || e || f
                            ) / n(
                                c.thumbheight || b
                                && b.attr( "height" ) || e || g
                            )
                        )
                    }
                )
            }

            var e = [];
            return a.children().each(
                function () {
                    var a = d( this ),
                        f = R(
                            d.extend(
                                a.data(), {
                                    id: a.attr( "id" )
                                }
                            )
                        );
                    if ( a.is( "a, img" ) ) {
                        b( a, f, ! 0 );
                    }
                    else {
                        if ( a.is( ":empty" ) ) {
                            return;
                        }
                        c(
                            a, null, d.extend(
                                f, {
                                    html : this,
                                    _html: a.html()
                                }
                            )
                        )
                    }
                    e.push( f )
                }
            ), e
        }

        function E( a ) {
            return 0 === a.offsetWidth && 0 === a.offsetHeight
        }

        function F( a ) {
            return ! d.contains( b.documentElement, a )
        }

        function G( a, b, c, d ) {
            return G.i || ( G.i = 1, G.ii = [ ! 0 ] ), d = d || G.i, "undefined"
            == typeof G.ii[ d ] && ( G.ii[ d ] = ! 0 ), a() ?
                b() :
            G.ii[ d ] && setTimeout(
                function () {
                    G.ii[ d ] && G( a, b, c, d )
                }, c || 100
            ), G.i ++
        }

        function H( a ) {
            c.replace(
                c.protocol + "//" + c.host
                + c.pathname.replace( /^\/?/, "/" ) + c.search + "#" + a
            )
        }

        function I( a, b, c, d ) {
            var e = a.data(),
                f = e.measures;
            if ( f && ( ! e.l || e.l.W !== f.width || e.l.H !== f.height || e.l.r
                !== f.ratio || e.l.w !== b.w || e.l.h !== b.h || e.l.m !== c || e.l.p
                !== d ) ) {
                var g = f.width,
                    i = f.height,
                    j = b.w / b.h,
                    k = f.ratio >= j,
                    l = "scaledown" === c,
                    m = "contain" === c,
                    n = "cover" === c,
                    o = $( d );
                k && ( l || m ) || ! k && n ? ( g = h(
                    b.w, 0, l ? g :
                    1 / 0
                ), i = g / f.ratio ) :
                ( k && n || ! k && ( l || m ) ) && ( i = h(
                    b.h, 0, l ? i :
                    1 / 0
                ), g = i * f.ratio ), a.css(
                    {
                        width : g,
                        height: i,
                        left  : p( o.x, b.w - g ),
                        top   : p( o.y, b.h - i )
                    }
                ), e.l = {
                    W: f.width,
                    H: f.height,
                    r: f.ratio,
                    w: b.w,
                    h: b.h,
                    m: c,
                    p: d
                }
            }
            return ! 0
        }

        function J( a, b ) {
            var c = a[ 0 ];
            c.styleSheet ? c.styleSheet.cssText = b : a.html( b )
        }

        function K( a, b, c ) {
            return b === c ? ! 1 : b >= a ? "left" : a >= c ? "right" : "left right"
        }

        function L( a, b, c, d ) {
            if ( ! c ) {
                return ! 1;
            }
            if ( ! isNaN( a ) ) {
                return a - ( d ? 0 : 1 );
            }
            for ( var e, f = 0, g = b.length; g > f; f ++ ) {
                var h = b[ f ];
                if ( h.id === a ) {
                    e = f;
                    break
                }
            }
            return e
        }

        function M( a, b, c ) {
            c = c || {}, a.each(
                function () {
                    var a, e = d( this ),
                        f    = e.data();
                    f.clickOn || ( f.clickOn = ! 0, d.extend(
                        cb(
                            e, {
                                onStart   : function ( b ) {
                                    a = b, ( c.onStart || g ).call( this, b )
                                },
                                onMove    : c.onMove || g,
                                onTouchEnd: c.onTouchEnd || g,
                                onEnd     : function ( c ) {
                                    c.moved || b.call( this, a )
                                }
                            }
                        ), {
                            noMove: ! 0
                        }
                    ) )
                }
            )
        }

        function N( a, b ) {
            return '<div class="' + a + '">' + ( b || "" ) + "</div>"
        }

        function O( a ) {
            for ( var b = a.length; b; ) {
                var c = Math.floor( Math.random() * b -- ),
                    d = a[ b ];
                a[ b ] = a[ c ], a[ c ] = d
            }
            return a
        }

        function P( a ) {
            return "[object Array]" == Object.prototype.toString.call( a )
                && d.map(
                    a, function ( a ) {
                        return d.extend( {}, a )
                    }
                )
        }

        function Q( a, b, c ) {
            a.scrollLeft( b || 0 ).scrollTop( c || 0 )
        }

        function R( a ) {
            if ( a ) {
                var b = {};
                return d.each(
                    a, function ( a, c ) {
                        b[ a.toLowerCase() ] = c
                    }
                ), b
            }
        }

        function S( a ) {
            if ( a ) {
                var b = + a;
                return isNaN( b ) ? ( b = a.split( "/" ), + b[ 0 ] / + b[ 1 ] || e ) : b
            }
        }

        function T( a, b, c, d ) {
            b && ( a.addEventListener ? a.addEventListener( b, c, ! ! d ) :
                a.attachEvent( "on" + b, c ) )
        }

        function U( a ) {
            return ! ! a.getAttribute( "disabled" )
        }

        function V( a ) {
            return {
                tabindex: - 1 * a + "",
                disabled: a
            }
        }

        function W( a, b ) {
            T(
                a, "keyup", function ( c ) {
                    U( a ) || 13 == c.keyCode && b.call( a, c )
                }
            )
        }

        function X( a, b ) {
            T(
                a, "focus", a.onfocusin = function ( c ) {
                    b.call( a, c )
                }, ! 0
            )
        }

        function Y( a, b ) {
            a.preventDefault ? a.preventDefault() :
                a.returnValue = ! 1, b && a.stopPropagation && a.stopPropagation()
        }

        function Z( a ) {
            return a ? ">" : "<"
        }

        function $( a ) {
            return a = ( a + "" ).split( /\s+/ ), {
                x: q( a[ 0 ] ) || bd,
                y: q( a[ 1 ] ) || bd
            }
        }

        function _( a, b ) {
            var c = a.data(),
                e = Math.round( b.pos ),
                f = function () {
                    c.sliding = ! 1, ( b.onEnd || g )()
                };
            "undefined" != typeof b.overPos && b.overPos !== b.pos && ( e =
                b.overPos, f = function () {
                _(
                    a, d.extend(
                        {}, b, {
                            overPos: b.pos,
                            time   : Math.max( Qc, b.time / 2 )
                        }
                    )
                )
            } );
            var h = d.extend(
                k( e ), b.width && {
                    width: b.width
                }
            );
            c.sliding = ! 0, Ic ?
                ( a.css( d.extend( l( b.time ), h ) ), b.time > 10 ?
                    u( a, "transform", f, b.time ) : f() ) :
                a.stop().animate( h, b.time, _c, f )
        }

        function ab( a, b, c, e, f, h ) {
            var i = "undefined" != typeof h;
            if ( i
                || ( f.push( arguments ), Array.prototype.push.call( arguments, f.length ), ! ( f.length
                > 1 ) ) ) {
                a = a || d( a ), b = b || d( b );
                var j    = a[ 0 ],
                    k    = b[ 0 ],
                    l    = "crossfade" === e.method,
                    m    = function () {
                        if ( ! m.done ) {
                            m.done = ! 0;
                            var a  = ( i || f.shift() ) && f.shift();
                            a && ab.apply( this, a ), ( e.onEnd || g )( ! ! a )
                        }
                    }, n = e.time / ( h || 1 );
                c.removeClass(
                    Rb + " "
                    + Qb
                ), a.stop().addClass( Rb ), b.stop().addClass( Qb ), l && k
                && a.fadeTo( 0, 0 ), a.fadeTo(
                    l ?
                        n :
                        0, 1, l && m
                ), b.fadeTo( n, 0, m ), j && l || k || m()
            }
        }

        function bb( a ) {
            var b = ( a.touches || [] )[ 0 ] || a;
            a._x = b.pageX, a._y = b.clientY, a._now = d.now()
        }

        function cb( a, c ) {
            function e( a ) {
                return m = d( a.target ), u.checked = p = q = s = ! 1, k || u.flow
                || a.touches && a.touches.length > 1 || a.which > 1 || ed && ed.type
                !== a.type && gd || ( p = c.select && m.is( c.select, t ) ) ?
                    p :
                    ( o = "touchstart" === a.type, q = m.is( "a, a *", t ), n =
                        u.control, r = u.noMove || u.noSwipe || n ?
                        16 :
                        u.snap ?
                            0 :
                            4, bb( a ), l = ed = a, fd =
                        a.type.replace( /down|start/, "move" ).replace( /Down/, "Move" ), ( c.onStart
                    || g ).call(
                        t, a, {
                            control: n,
                            $target: m
                        }
                    ), k = u.flow = ! 0, void( ( ! o || u.go ) && Y( a ) ) )
            }

            function f( a ) {
                if ( a.touches && a.touches.length > 1 || Nc && ! a.isPrimary || fd
                    !== a.type || ! k ) {
                    return k && h(), void( c.onTouchEnd || g )();
                }
                bb( a );
                var b = Math.abs( a._x - l._x ),
                    d = Math.abs( a._y - l._y ),
                    e = b - d,
                    f = ( u.go || u.x || e >= 0 ) && ! u.noSwipe,
                    i = 0 > e;
                o && ! u.checked ? ( k = f ) && Y( a ) :
                    ( Y( a ), ( c.onMove || g ).call(
                        t, a, {
                            touch: o
                        }
                    ) ), ! s && Math.sqrt( Math.pow( b, 2 ) + Math.pow( d, 2 ) )
                > r && ( s = ! 0 ), u.checked = u.checked || f || i
            }

            function h( a ) {
                ( c.onTouchEnd || g )();
                var b = k;
                u.control = k = ! 1, b && ( u.flow = ! 1 ), ! b || q && ! u.checked
                || ( a && Y( a ), gd = ! 0, clearTimeout( hd ), hd =
                    setTimeout(
                        function () {
                            gd = ! 1
                        }, 1e3
                    ), ( c.onEnd || g ).call(
                    t, {
                        moved     : s,
                        $target   : m,
                        control   : n,
                        touch     : o,
                        startEvent: l,
                        aborted   : ! a || "MSPointerCancel" === a.type
                    }
                ) )
            }

            function i() {
                u.flow || setTimeout(
                    function () {
                        u.flow = ! 0
                    }, 10
                )
            }

            function j() {
                u.flow && setTimeout(
                    function () {
                        u.flow = ! 1
                    }, Pc
                )
            }

            var k, l, m, n, o, p, q, r, s, t = a[ 0 ],
                u                            = {};
            return Nc ?
                ( T( t, "MSPointerDown", e ), T( b, "MSPointerMove", f ), T( b, "MSPointerCancel", h ), T( b, "MSPointerUp", h ) ) :
                ( T( t, "touchstart", e ), T( t, "touchmove", f ), T( t, "touchend", h ), T( b, "touchstart", i ), T( b, "touchend", j ), T( b, "touchcancel", j ), Ec.on( "scroll", j ), a.on( "mousedown", e ), Fc.on( "mousemove", f ).on( "mouseup", h ) ), a.on(
                "click", "a", function ( a ) {
                    u.checked && Y( a )
                }
            ), u
        }

        function db( a, b ) {
            function c( c, d ) {
                A = ! 0, j = l = c._x, q = c._now, p = [
                    [ q, j ]
                ], m = n = D.noMove || d ? 0 :
                    v( a, ( b.getPos || g )() ), ( b.onStart || g ).call( B, c )
            }

            function e( a, b ) {
                s = D.min, t = D.max, u = D.snap, w = a.altKey, A = z = ! 1, y =
                    b.control, y || C.sliding || c( a )
            }

            function f( d, e ) {
                D.noSwipe || ( A || c( d ), l = d._x, p.push( [ d._now, l ] ), n = m
                    - ( j - l ), o = K( n, s, t ), s >= n ?
                    n = x( n, s ) :
                n >= t && ( n = x( n, t ) ), D.noMove || ( a.css( k( n ) ), z
                || ( z = ! 0, e.touch || Nc || a.addClass( ec ) ), ( b.onMove
                || g ).call(
                    B, d, {
                        pos : n,
                        edge: o
                    }
                ) ) )
            }

            function i( e ) {
                if ( ! D.noSwipe || ! e.moved ) {
                    A || c( e.startEvent, ! 0 ), e.touch || Nc
                    || a.removeClass( ec ), r = d.now();
                    for ( var f, i, j, k, o, q, v, x, y, z = r - Pc, C = null, E =
                        Qc, F                              = b.friction, G = p.length - 1; G >= 0; G -- ) {
                        if ( f = p[ G ][ 0 ], i = Math.abs( f - z ), null === C || j > i ) {
                            C = f, k = p[ G ][ 1 ];
                        }
                        else if ( C === z || i > j ) {
                            break;
                        }
                        j = i
                    }
                    v     = h( n, s, t );
                    var H = k - l,
                        I = H >= 0,
                        J = r - C,
                        K = J > Pc,
                        L = ! K && n !== m && v === n;
                    u && ( v = h(
                        Math[ L ? I ? "floor" : "ceil" :
                            "round" ]( n / u ) * u, s, t
                    ), s = t = v ), L && ( u || v === n )
                    && ( y = - ( H / J ), E *=
                        h( Math.abs( y ), b.timeLow, b.timeHigh ), o = Math.round(
                        n
                        + y * E
                        / F
                    ), u || ( v = o ), ( ! I && o > t || I && s > o ) && ( q = I ?
                        s :
                        t, x = o - q, u || ( v = q ), x = h(
                        v + .03 * x, q - 50, q
                        + 50
                    ), E = Math.abs( ( n - x ) / ( y / F ) ) ) ), E *= w ?
                        10 : 1, ( b.onEnd || g ).call(
                        B, d.extend(
                            e, {
                                moved  : e.moved || K && u,
                                pos    : n,
                                newPos : v,
                                overPos: x,
                                time   : E
                            }
                        )
                    )
                }
            }

            var j, l, m, n, o, p, q, r, s, t, u, w, y, z, A, B = a[ 0 ],
                C                                              = a.data(),
                D                                              = {};
            return D = d.extend(
                cb(
                    b.$wrap, d.extend(
                        {}, b, {
                            onStart: e,
                            onMove : f,
                            onEnd  : i
                        }
                    )
                ), D
            )
        }

        function eb( a, b ) {
            var c, e, f, h = a[ 0 ],
                i          = {
                    prevent: {}
                };
            return T(
                h, Oc, function ( a ) {
                    var h = a.wheelDeltaY || - 1 * a.deltaY || 0,
                        j = a.wheelDeltaX || - 1 * a.deltaX || 0,
                        k = Math.abs( j ) && ! Math.abs( h ),
                        l = Z( 0 > j ),
                        m = e === l,
                        n = d.now(),
                        o = Pc > n - f;
                    e = l, f = n, k && i.ok && ( ! i.prevent[ l ] || c )
                    && ( Y( a, ! 0 ), c && m && o || ( b.shift && ( c = ! 0, clearTimeout( i.t ), i.t = setTimeout(
                        function () {
                            c = ! 1
                        }, Rc
                    ) ), ( b.onEnd || g )( a, b.shift ? l : j ) ) )
                }
            ), i
        }

        function fb() {
            d.each(
                d.Fotorama.instances, function ( a, b ) {
                    b.index = a
                }
            )
        }

        function gb( a ) {
            d.Fotorama.instances.push( a ), fb()
        }

        function hb( a ) {
            d.Fotorama.instances.splice( a.index, 1 ), fb()
        }

        var ib = "fotorama",
            jb = "fullscreen",
            kb = ib + "__wrap",
            lb = kb + "--css2",
            mb = kb + "--css3",
            nb = kb + "--video",
            ob = kb + "--fade",
            pb = kb + "--slide",
            qb = kb + "--no-controls",
            rb = kb + "--no-shadows",
            sb = kb + "--pan-y",
            tb = kb + "--rtl",
            ub = kb + "--only-active",
            vb = kb + "--no-captions",
            wb = kb + "--toggle-arrows",
            xb = ib + "__stage",
            yb = xb + "__frame",
            zb = yb + "--video",
            Ab = xb + "__shaft",
            Bb = ib + "__grab",
            Cb = ib + "__pointer",
            Db = ib + "__arr",
            Eb = Db + "--disabled",
            Fb = Db + "--prev",
            Gb = Db + "--next",
            Hb = ib + "__nav",
            Ib = Hb + "-wrap",
            Jb = Hb + "__shaft",
            Kb = Hb + "--dots",
            Lb = Hb + "--thumbs",
            Mb = Hb + "__frame",
            Nb = Mb + "--dot",
            Ob = Mb + "--thumb",
            Pb = ib + "__fade",
            Qb = Pb + "-front",
            Rb = Pb + "-rear",
            Sb = ib + "__shadow",
            Tb = Sb + "s",
            Ub = Tb + "--left",
            Vb = Tb + "--right",
            Wb = ib + "__active",
            Xb = ib + "__select",
            Yb = ib + "--hidden",
            Zb = ib + "--fullscreen",
            $b = ib + "__fullscreen-icon",
            _b = ib + "__error",
            ac = ib + "__loading",
            bc = ib + "__loaded",
            cc = bc + "--full",
            dc = bc + "--img",
            ec = ib + "__grabbing",
            fc = ib + "__img",
            gc = fc + "--full",
            hc = ib + "__dot",
            ic = ib + "__thumb",
            jc = ic + "-border",
            kc = ib + "__html",
            lc = ib + "__video",
            mc = lc + "-play",
            nc = lc + "-close",
            oc = ib + "__caption",
            pc = ib + "__caption__wrap",
            qc = ib + "__spinner",
            rc = '" tabindex="0" role="button',
            sc = d && d.fn.jquery.split( "." );
        if ( ! sc || sc[ 0 ] < 1 || 1 == sc[ 0 ] && sc[ 1 ] < 8 ) {
            throw "Fotorama requires jQuery 1.8 or later and will not run without it.";
        }
        var tc    = {}, uc = function ( a, b, c ) {
                function d( a ) {
                    r.cssText = a
                }

                function e( a, b ) {
                    return typeof a === b
                }

                function f( a, b ) {
                    return ! ! ~ ( "" + a ).indexOf( b )
                }

                function g( a, b ) {
                    for ( var d in a ) {
                        var e = a[ d ];
                        if ( ! f( e, "-" ) && r[ e ] !== c ) {
                            return "pfx" == b ? e : ! 0
                        }
                    }
                    return ! 1
                }

                function h( a, b, d ) {
                    for ( var f in a ) {
                        var g = b[ a[ f ] ];
                        if ( g !== c ) {
                            return d === ! 1 ? a[ f ] : e( g, "function" ) ?
                                g.bind( d || b ) : g
                        }
                    }
                    return ! 1
                }

                function i( a, b, c ) {
                    var d = a.charAt( 0 ).toUpperCase() + a.slice( 1 ),
                        f = ( a + " " + u.join( d + " " ) + d ).split( " " );
                    return e( b, "string" ) || e( b, "undefined" ) ? g( f, b ) :
                        ( f = ( a + " " + v.join( d + " " ) + d ).split( " " ), h( f, b, c ) )
                }

                var j, k, l, m = "2.6.2",
                    n          = {}, o = b.documentElement,
                    p          = "modernizr",
                    q          = b.createElement( p ),
                    r          = q.style,
                    s          = ( {}.toString, " -webkit- -moz- -o- -ms- ".split( " " ) ),
                    t          = "Webkit Moz O ms",
                    u          = t.split( " " ),
                    v          = t.toLowerCase().split( " " ),
                    w          = {}, x = [],
                    y          = x.slice,
                    z          = function ( a, c, d, e ) {
                        var f, g, h, i, j = b.createElement( "div" ),
                            k             = b.body,
                            l             = k || b.createElement( "body" );
                        if ( parseInt( d, 10 ) ) {
                            for ( ; d --; )
                                h = b.createElement( "div" ), h.id = e ? e[ d ] :
                                p + ( d + 1 ), j.appendChild( h );
                        }
                        return f =
                            [ "&#173;", '<style id="s', p, '">', a, "</style>" ].join( "" ), j.id =
                            p, ( k ?
                            j :
                            l ).innerHTML += f, l.appendChild( j ), k
                        || ( l.style.background = "", l.style.overflow = "hidden", i =
                            o.style.overflow, o.style.overflow =
                            "hidden", o.appendChild( l ) ), g = c( j, a ), k ?
                            j.parentNode.removeChild( j ) :
                            ( l.parentNode.removeChild( l ), o.style.overflow = i ), ! ! g
                    }, A       = {}.hasOwnProperty;
                l = e( A, "undefined" ) || e( A.call, "undefined" ) ?
                    function ( a, b ) {
                        return b in a && e( a.constructor.prototype[ b ], "undefined" )
                    } : function ( a, b ) {
                    return A.call( a, b )
                }, Function.prototype.bind || ( Function.prototype.bind =
                    function ( a ) {
                        var b = this;
                        if ( "function" != typeof b ) {
                            throw new TypeError;
                        }
                        var c = y.call( arguments, 1 ),
                            d = function () {
                                if ( this instanceof d ) {
                                    var e       = function () {
                                    };
                                    e.prototype = b.prototype;
                                    var f       = new e,
                                        g       = b.apply( f, c.concat( y.call( arguments ) ) );
                                    return Object( g ) === g ? g : f
                                }
                                return b.apply( a, c.concat( y.call( arguments ) ) )
                            };
                        return d
                    } ), w.csstransforms3d = function () {
                    var a = ! ! i( "perspective" );
                    return a
                };
                for ( var B in w )
                    l( w, B ) && ( k = B.toLowerCase(), n[ k ] =
                        w[ B ](), x.push(
                        ( n[ k ] ?
                            "" : "no-" ) + k
                    ) );
                return n.addTest = function ( a, b ) {
                    if ( "object" == typeof a ) {
                        for ( var d in a )
                            l( a, d ) && n.addTest( d, a[ d ] );
                    }
                    else {
                        if ( a = a.toLowerCase(), n[ a ] !== c ) {
                            return n;
                        }
                        b = "function" == typeof b ? b() :
                            b, "undefined" != typeof enableClasses && enableClasses
                        && ( o.className += " " + ( b ?
                                "" : "no-" ) + a ), n[ a ] = b
                    }
                    return n
                }, d( "" ), q = j = null, n._version = m, n._prefixes =
                    s, n._domPrefixes = v, n._cssomPrefixes = u, n.testProp =
                    function ( a ) {
                        return g( [ a ] )
                    }, n.testAllProps = i, n.testStyles = z, n.prefixed =
                    function ( a, b, c ) {
                        return b ? i( a, b, c ) : i( a, "pfx" )
                    }, n
            }( a, b ),
            vc    = {
                ok     : ! 1,
                is     : function () {
                    return ! 1
                },
                request: function () {
                },
                cancel : function () {
                },
                event  : "",
                prefix : ""
            }, wc = "webkit moz o ms khtml".split( " " );
        if ( "undefined" != typeof b.cancelFullScreen ) {
            vc.ok = ! 0;
        }
        else {
            for ( var xc = 0, yc = wc.length; yc > xc; xc ++ )
                if ( vc.prefix = wc[ xc ], "undefined" != typeof b[ vc.prefix
                    + "CancelFullScreen" ] ) {
                    vc.ok = ! 0;
                    break
                }
        }
        vc.ok && ( vc.event = vc.prefix + "fullscreenchange", vc.is =
            function () {
                switch ( this.prefix ) {
                    case "":
                        return b.fullScreen;
                    case "webkit":
                        return b.webkitIsFullScreen;
                    default:
                        return b[ this.prefix + "FullScreen" ]
                }
            }, vc.request = function ( a ) {
            return "" === this.prefix ? a.requestFullScreen() :
                a[ this.prefix + "RequestFullScreen" ]()
        }, vc.cancel = function () {
            return "" === this.prefix ? b.cancelFullScreen() :
                b[ this.prefix + "CancelFullScreen" ]()
        } );
        var zc, Ac     = {
            lines  : 12,
            length : 5,
            width  : 2,
            radius : 7,
            corners: 1,
            rotate : 15,
            color  : "rgba(128, 128, 128, .75)",
            hwaccel: ! 0
        }, Bc          = {
            top      : "auto",
            left     : "auto",
            className: ""
        };
        ! function ( a, b ) {
            zc = b()
        }(
            this, function () {
                function a( a, c ) {
                    var d, e = b.createElement( a || "div" );
                    for ( d in c )
                        e[ d ] = c[ d ];
                    return e
                }

                function c( a ) {
                    for ( var b = 1, c = arguments.length; c > b; b ++ )
                        a.appendChild( arguments[ b ] );
                    return a
                }

                function d( a, b, c, d ) {
                    var e = [ "opacity", b, ~ ~ ( 100 * a ), c, d ].join( "-" ),
                        f = .01 + c / d * 100,
                        g = Math.max( 1 - ( 1 - a ) / b * ( 100 - f ), a ),
                        h = m.substring( 0, m.indexOf( "Animation" ) ).toLowerCase(),
                        i = h && "-" + h + "-" || "";
                    return o[ e ] || ( p.insertRule(
                        "@" + i + "keyframes " + e
                        + "{0%{opacity:" + g + "}" + f + "%{opacity:" + a + "}" + ( f + .01 )
                        + "%{opacity:1}" + ( f + b ) % 100 + "%{opacity:" + a
                        + "}100%{opacity:" + g + "}}", p.cssRules.length
                    ), o[ e ] = 1 ), e
                }

                function f( a, b ) {
                    var c, d, f = a.style;
                    for ( b = b.charAt( 0 ).toUpperCase() + b.slice( 1 ), d = 0; d
                    < n.length; d ++ )
                        if ( c = n[ d ] + b, f[ c ] !== e ) {
                            return c;
                        }
                    return f[ b ] !== e ? b : void 0
                }

                function g( a, b ) {
                    for ( var c in b )
                        a.style[ f( a, c ) || c ] = b[ c ];
                    return a
                }

                function h( a ) {
                    for ( var b = 1; b < arguments.length; b ++ ) {
                        var c = arguments[ b ];
                        for ( var d in c )
                            a[ d ] === e && ( a[ d ] = c[ d ] )
                    }
                    return a
                }

                function i( a ) {
                    for ( var b = {
                        x: a.offsetLeft,
                        y: a.offsetTop
                    }; a = a.offsetParent; )
                        b.x += a.offsetLeft, b.y += a.offsetTop;
                    return b
                }

                function j( a, b ) {
                    return "string" == typeof a ? a : a[ b % a.length ]
                }

                function k( a ) {
                    return "undefined" == typeof this ? new k( a ) :
                        void( this.opts = h( a || {}, k.defaults, q ) )
                }

                function l() {
                    function b( b, c ) {
                        return a(
                            "<" + b
                            + ' xmlns="urn:schemas-microsoft.com:vml" class="spin-vml">', c
                        )
                    }

                    p.addRule( ".spin-vml", "behavior:url(#default#VML)" ), k.prototype.lines =
                        function ( a, d ) {
                            function e() {
                                return g(
                                    b(
                                        "group", {
                                            coordsize  : k + " " + k,
                                            coordorigin: - i + " " + - i
                                        }
                                    ), {
                                        width : k,
                                        height: k
                                    }
                                )
                            }

                            function f( a, f, h ) {
                                c(
                                    m, c(
                                        g(
                                            e(), {
                                                rotation: 360 / d.lines * a + "deg",
                                                left    : ~ ~ f
                                            }
                                        ), c(
                                            g(
                                                b(
                                                    "roundrect", {
                                                        arcsize: d.corners
                                                    }
                                                ), {
                                                    width : i,
                                                    height: d.width,
                                                    left  : d.radius,
                                                    top   : - d.width >> 1,
                                                    filter: h
                                                }
                                            ), b(
                                                "fill", {
                                                    color  : j( d.color, a ),
                                                    opacity: d.opacity
                                                }
                                            ), b(
                                                "stroke", {
                                                    opacity: 0
                                                }
                                            )
                                        )
                                    )
                                )
                            }

                            var h, i = d.length + d.width,
                                k    = 2 * i,
                                l    = 2 * - ( d.width + d.length ) + "px",
                                m    = g(
                                    e(), {
                                        position: "absolute",
                                        top     : l,
                                        left    : l
                                    }
                                );
                            if ( d.shadow ) {
                                for ( h = 1; h <= d.lines; h ++ )
                                    f( h, - 2, "progid:DXImageTransform.Microsoft.Blur(pixelradius=2,makeshadow=1,shadowopacity=.3)" );
                            }
                            for ( h = 1; h <= d.lines; h ++ )
                                f( h );
                            return c( a, m )
                        }, k.prototype.opacity = function ( a, b, c, d ) {
                        var e = a.firstChild;
                        d = d.shadow && d.lines || 0, e && b + d < e.childNodes.length
                        && ( e = e.childNodes[ b + d ], e = e && e.firstChild, e = e
                            && e.firstChild, e && ( e.opacity = c ) )
                    }
                }

                var m, n = [ "webkit", "Moz", "ms", "O" ],
                    o    = {}, p = function () {
                        var d = a(
                            "style", {
                                type: "text/css"
                            }
                        );
                        return c( b.getElementsByTagName( "head" )[ 0 ], d ), d.sheet
                        || d.styleSheet
                    }(),
                    q    = {
                        lines    : 12,
                        length   : 7,
                        width    : 5,
                        radius   : 10,
                        rotate   : 0,
                        corners  : 1,
                        color    : "#000",
                        direction: 1,
                        speed    : 1,
                        trail    : 100,
                        opacity  : .25,
                        fps      : 20,
                        zIndex   : 2e9,
                        className: "spinner",
                        top      : "auto",
                        left     : "auto",
                        position : "relative"
                    };
                k.defaults = {}, h(
                    k.prototype, {
                        spin   : function ( b ) {
                            this.stop();
                            var c, d, e = this,
                                f       = e.opts,
                                h       = e.el = g(
                                    a(
                                        0, {
                                            className: f.className
                                        }
                                    ), {
                                        position: f.position,
                                        width   : 0,
                                        zIndex  : f.zIndex
                                    }
                                ),
                                j = f.radius + f.length + f.width;
                            if ( b && ( b.insertBefore( h, b.firstChild || null ), d =
                                    i( b ), c = i( h ), g(
                                    h, {
                                        left: ( "auto" == f.left ? d.x - c.x + ( b.offsetWidth >> 1 ) :
                                        parseInt( f.left, 10 ) + j ) + "px",
                                        top : ( "auto" == f.top ? d.y - c.y + ( b.offsetHeight >> 1 ) :
                                        parseInt( f.top, 10 ) + j ) + "px"
                                    }
                                ) ), h.setAttribute( "role", "progressbar" ), e.lines( h, e.opts ), ! m ) {
                                var k, l = 0,
                                    n    = ( f.lines - 1 ) * ( 1 - f.direction ) / 2,
                                    o    = f.fps,
                                    p    = o / f.speed,
                                    q    = ( 1 - f.opacity ) / ( p * f.trail / 100 ),
                                    r    = p / f.lines;
                                ! function s() {
                                    l ++;
                                    for ( var a = 0; a < f.lines; a ++ )
                                        k = Math.max(
                                            1 - ( l + ( f.lines - a ) * r ) % p
                                            * q, f.opacity
                                        ), e.opacity( h, a * f.direction + n, k, f );
                                    e.timeout = e.el && setTimeout( s, ~ ~ ( 1e3 / o ) )
                                }()
                            }
                            return e
                        },
                        stop   : function () {
                            var a = this.el;
                            return a && ( clearTimeout( this.timeout ), a.parentNode
                            && a.parentNode.removeChild( a ), this.el = e ), this
                        },
                        lines  : function ( b, e ) {
                            function f( b, c ) {
                                return g(
                                    a(), {
                                        position       : "absolute",
                                        width          : e.length + e.width + "px",
                                        height         : e.width + "px",
                                        background     : b,
                                        boxShadow      : c,
                                        transformOrigin: "left",
                                        transform      : "rotate(" + ~ ~ ( 360 / e.lines * i + e.rotate )
                                        + "deg) translate(" + e.radius + "px,0)",
                                        borderRadius   : ( e.corners * e.width >> 1 ) + "px"
                                    }
                                )
                            }

                            for ( var h, i = 0, k = ( e.lines - 1 ) * ( 1 - e.direction )
                                / 2; i < e.lines; i ++ )
                                h = g(
                                    a(), {
                                        position : "absolute",
                                        top      : 1 + ~ ( e.width / 2 ) + "px",
                                        transform: e.hwaccel ? "translate3d(0,0,0)" : "",
                                        opacity  : e.opacity,
                                        animation: m && d(
                                            e.opacity, e.trail, k + i
                                            * e.direction, e.lines
                                        ) + " " + 1 / e.speed + "s linear infinite"
                                    }
                                ), e.shadow && c(
                                    h, g(
                                        f( "#000", "0 0 4px #000" ), {
                                            top: "2px"
                                        }
                                    )
                                ), c( b, c( h, f( j( e.color, i ), "0 0 1px rgba(0,0,0,.1)" ) ) );
                            return b
                        },
                        opacity: function ( a, b, c ) {
                            b < a.childNodes.length && ( a.childNodes[ b ].style.opacity = c )
                        }
                    }
                );
                var r = g(
                    a( "group" ), {
                        behavior: "url(#default#VML)"
                    }
                );
                return ! f( r, "transform" ) && r.adj ? l() : m =
                    f( r, "animation" ), k
            }
        );
        var Cc, Dc, Ec = d( a ),
            Fc         = d( b ),
            Gc         = "quirks" === c.hash.replace( "#", "" ),
            Hc         = uc.csstransforms3d,
            Ic         = Hc && ! Gc,
            Jc         = Hc || "CSS1Compat" === b.compatMode,
            Kc         = vc.ok,
            Lc         =
                navigator.userAgent.match( /Android|webOS|iPhone|iPad|iPod|BlackBerry|Windows Phone/i ),
            Mc         = ! Ic || Lc,
            Nc         = navigator.msPointerEnabled,
            Oc         = "onwheel" in b.createElement( "div" ) ? "wheel" :
                b.onmousewheel !== e ? "mousewheel" : "DOMMouseScroll",
            Pc         = 250,
            Qc         = 300,
            Rc         = 1400,
            Sc         = 5e3,
            Tc         = 2,
            Uc         = 64,
            Vc         = 500,
            Wc         = 333,
            Xc         = "$stageFrame",
            Yc         = "$navDotFrame",
            Zc         = "$navThumbFrame",
            $c         = "auto",
            _c         = f( [ .1, 0, .25, 1 ] ),
            ad         = 99999,
            bd         = "50%",
            cd         = {
                width              : null,
                minwidth           : null,
                maxwidth           : "100%",
                height             : null,
                minheight          : null,
                maxheight          : null,
                ratio              : null,
                margin             : Tc,
                glimpse            : 0,
                fit                : "contain",
                position           : bd,
                thumbposition      : bd,
                nav                : "dots",
                navposition        : "bottom",
                navwidth           : null,
                thumbwidth         : Uc,
                thumbheight        : Uc,
                thumbmargin        : Tc,
                thumbborderwidth   : Tc,
                thumbfit           : "cover",
                allowfullscreen    : ! 1,
                transition         : "slide",
                clicktransition    : null,
                transitionduration : Qc,
                captions           : ! 0,
                hash               : ! 1,
                startindex         : 0,
                loop               : ! 1,
                autoplay           : ! 1,
                stopautoplayontouch: ! 0,
                keyboard           : ! 1,
                arrows             : ! 0,
                click              : ! 0,
                swipe              : ! 0,
                trackpad           : ! 1,
                enableifsingleframe: ! 1,
                controlsonstart    : ! 0,
                shuffle            : ! 1,
                direction          : "ltr",
                shadows            : ! 0,
                spinner            : null
            }, dd      = {
                left : ! 0,
                right: ! 0,
                down : ! 1,
                up   : ! 1,
                space: ! 1,
                home : ! 1,
                end  : ! 1
            };
        G.stop         = function ( a ) {
            G.ii[ a ] = ! 1
        };
        var ed, fd, gd, hd;
        jQuery.Fotorama = function ( a, e ) {
            function f() {
                d.each(
                    yd, function ( a, b ) {
                        if ( ! b.i ) {
                            b.i   = me ++;
                            var c = A( b.video, ! 0 );
                            if ( c ) {
                                var d = {};
                                b.video = c, b.img || b.thumb ? b.thumbsReady = ! 0 :
                                    d = B( b, yd, ie ), C(
                                    yd, {
                                        img  : d.img,
                                        thumb: d.thumb
                                    }, b.i, ie
                                )
                            }
                        }
                    }
                )
            }

            function g( a ) {
                return Zd[ a ] || ie.fullScreen
            }

            function i( a ) {
                var b = "keydown." + ib,
                    c = ib + je,
                    d = "keydown." + c,
                    f = "resize." + c + " orientationchange." + c;
                a ? ( Fc.on(
                    d, function ( a ) {
                        var b, c;
//                Cd && 27 === a.keyCode ? (b = !0, md(Cd, !0, !0)) : (ie.fullScreen || e.keyboard && !ie.index) && (27
// === a.keyCode ? (b = !0, ie.cancelFullScreen()) : a.shiftKey && 32 === a.keyCode && g("space") || 37 === a.keyCode
// && g("left") || 38 === a.keyCode && g("up") ? c = "<" : 32 === a.keyCode && g("space") || 39 === a.keyCode &&
// g("right") || 40 === a.keyCode && g("down") ? c = ">" : 36 === a.keyCode && g("home") ? c = "<<" : 35 === a.keyCode
// && g("end") && (c = ">>")), (b || c) && Y(a), c && ie.show({ index: c, slow: a.altKey, user: !0 });
                    }
                ), ie.index
                || Fc.off( b ).on(
                    b, "textarea, input, select", function ( a ) {
                        ! Dc.hasClass( jb ) && a.stopPropagation()
                    }
                ), Ec.on( f, ie.resize ) ) : ( Fc.off( d ), Ec.off( f ) )
            }

            function j( b ) {
                b !== j.f && ( b ?
                    ( a.html( "" ).addClass(
                        ib + " "
                        + ke
                    ).append( qe ).before( oe ).before( pe ), gb( ie ) ) :
                    ( qe.detach(), oe.detach(), pe.detach(), a.html( ne.urtext ).removeClass( ke ), hb( ie ) ), i( b ), j.f =
                    b )
            }

            function m() {
                yd = ie.data = yd || P( e.data ) || D( a ), zd = ie.size =
                    yd.length, ! xd.ok && e.shuffle && O( yd ), f(), Je = y( Je ), zd
                && j( ! 0 )
            }

            function o() {
                var a = 2 > zd && ! e.enableifsingleframe || Cd;
                Me.noMove = a || Sd, Me.noSwipe = a || ! e.swipe, ! Wd
                && se.toggleClass( Bb, ! e.click && ! Me.noMove && ! Me.noSwipe ), Nc
                && qe.toggleClass( sb, ! Me.noSwipe )
            }

            function t( a ) {
                a === ! 0 && ( a = "" ), e.autoplay = Math.max( + a || Sc, 1.5 * Vd )
            }

            function u() {
                function a( a, c ) {
                    b[ a ? "add" : "remove" ].push( c )
                }

                ie.options = e = R( e ), Sd = "crossfade" === e.transition
                    || "dissolve" === e.transition, Md = e.loop && ( zd > 2 || Sd
                    && ( ! Wd || "slide" !== Wd ) ), Vd = + e.transitionduration
                    || Qc, Yd = "rtl" === e.direction, Zd = d.extend(
                    {}, e.keyboard
                    && dd, e.keyboard
                );
                var b = {
                    add   : [],
                    remove: []
                };
                zd > 1 || e.enableifsingleframe ?
                    ( Nd = e.nav, Pd = "top"
                        === e.navposition, b.remove.push( Xb ), we.toggle( ! ! e.arrows ) ) :
                    ( Nd = ! 1, we.hide() ), Rb(), Bd =
                    new zc(
                        d.extend(
                            Ac, e.spinner, Bc, {
                                direction: Yd ? - 1 : 1
                            }
                        )
                    ), Gc(), Hc(), e.autoplay && t( e.autoplay ), Td =
                    n( e.thumbwidth ) || Uc, Ud = n( e.thumbheight ) || Uc, Ne.ok =
                    Pe.ok = e.trackpad && ! Mc, o(), ed( e, [ Le ] ), Od = "thumbs"
                    === Nd, Od ?
                    ( lc( zd, "navThumb" ), Ad = Be, he =
                        Zc, J(
                        oe, d.Fotorama.jst.style(
                            {
                                w: Td,
                                h: Ud,
                                b: e.thumbborderwidth,
                                m: e.thumbmargin,
                                s: je,
                                q: ! Jc
                            }
                        )
                    ), ye.addClass( Lb ).removeClass( Kb ) ) : "dots" === Nd ?
                    ( lc( zd, "navDot" ), Ad = Ae, he =
                        Yc, ye.addClass( Kb ).removeClass( Lb ) ) :
                    ( Nd = ! 1, ye.removeClass( Lb + " " + Kb ) ), Nd && ( Pd ?
                    xe.insertBefore( re ) :
                    xe.insertAfter( re ), wc.nav = ! 1, wc( Ad, ze, "nav" ) ), Qd =
                    e.allowfullscreen, Qd ?
                    ( De.prependTo( re ), Rd = Kc && "native" === Qd ) :
                    ( De.detach(), Rd = ! 1 ), a( Sd, ob ), a( ! Sd, pb ), a( ! e.captions, vb ), a( Yd, tb ), a(
                    "always"
                    !== e.arrows, wb
                ), Xd = e.shadows
                    && ! Mc, a( ! Xd, rb ), qe.addClass( b.add.join( " " ) ).removeClass( b.remove.join( " " ) ), Ke =
                    d.extend( {}, e )
            }

            function x( a ) {
                return 0 > a ? ( zd + a % zd ) % zd : a >= zd ? a % zd : a
            }

            function y( a ) {
                return h( a, 0, zd - 1 )
            }

            function z( a ) {
                return Md ? x( a ) : y( a )
            }

            function E( a ) {
                return a > 0 || Md ? a - 1 : ! 1
            }

            function U( a ) {
                return zd - 1 > a || Md ? a + 1 : ! 1
            }

            function $() {
                Me.min = Md ? - 1 / 0 :
                    - r( zd - 1, Le.w, e.margin, Fd ), Me.max = Md ? 1 / 0 :
                    - r( 0, Le.w, e.margin, Fd ), Me.snap = Le.w + e.margin
            }

            function bb() {
                Oe.min = Math.min( 0, Le.nw - ze.width() ), Oe.max =
                    0, ze.toggleClass( Bb, ! ( Oe.noMove = Oe.min === Oe.max ) )
            }

            function cb( a, b, c ) {
                if ( "number" == typeof a ) {
                    a     = new Array( a );
                    var e = ! 0
                }
                return d.each(
                    a, function ( a, d ) {
                        if ( e && ( d = a ), "number" == typeof d ) {
                            var f = yd[ x( d ) ];
                            if ( f ) {
                                var g = "$" + b + "Frame",
                                    h = f[ g ];
                                c.call( this, a, d, f, h, g, h && h.data() )
                            }
                        }
                    }
                )
            }

            function fb( a, b, c, d ) {
                ( ! $d || "*" === $d && d === Ld ) && ( a = q( e.width )
                    || q( a ) || Vc, b = q( e.height ) || q( b ) || Wc, ie.resize(
                    {
                        width: a,
                        ratio: e.ratio || c || a / b
                    }, 0, d !== Ld && "*"
                ) )
            }

            function Pb( a, b, c, f, g, h ) {
                cb(
                    a, b, function ( a, i, j, k, l, m ) {
                        function n( a ) {
                            var b = x( i );
                            fd(
                                a, {
                                    index: b,
                                    src  : w,
                                    frame: yd[ b ]
                                }
                            )
                        }

                        function o() {
                            t.remove(), d.Fotorama.cache[ w ] = "error", j.html && "stage"
                            === b || ! y || y === w ?
                                ( ! w || j.html || r ?
                                "stage" === b && ( k.trigger( "f:load" ).removeClass(
                                    ac
                                    + " " + _b
                                ).addClass( bc ), n( "load" ), fb() ) :
                                    ( k.trigger( "f:error" ).removeClass( ac ).addClass( _b ), n( "error" ) ), m.state =
                                    "error", ! ( zd
                                > 1
                                && yd[ i ]
                                === j )
                                || j.html
                                || j.deleted
                                || j.video
                                || r
                                || ( j.deleted = ! 0, ie.splice( i, 1 ) ) ) :
                                ( j[ v ] = w = y, Pb( [ i ], b, c, f, g, ! 0 ) )
                        }

                        function p() {
                            d.Fotorama.measures[ w ] = u.measures = d.Fotorama.measures[ w ] || {
                                    width : s.width,
                                    height: s.height,
                                    ratio : s.width / s.height
                                }, fb( u.measures.width, u.measures.height, u.measures.ratio, i ), t.off( "load error" ).addClass(
                                fc
                                + ( r ?
                                " " + gc :
                                    "" )
                            ).prependTo( k ), I(
                                t, ( d.isFunction( c ) ?
                                    c() :
                                    c ) || Le, f || j.fit || e.fit, g || j.position
                                || e.position
                            ), d.Fotorama.cache[ w ] = m.state =
                                "loaded", setTimeout(
                                function () {
                                    k.trigger( "f:load" ).removeClass(
                                        ac + " "
                                        + _b
                                    ).addClass(
                                        bc + " " + ( r ?
                                            cc :
                                            dc )
                                    ), "stage" === b ?
                                        n( "load" ) :
                                    ( j.thumbratio === $c || ! j.thumbratio && e.thumbratio
                                    === $c ) && ( j.thumbratio = u.measures.ratio, vd() )
                                }, 0
                            )
                        }

                        function q() {
                            var a = 10;
                            G(
                                function () {
                                    return ! fe || ! a -- && ! Mc
                                }, function () {
                                    p()
                                }
                            )
                        }

                        if ( k ) {
                            var r = ie.fullScreen && j.full && j.full !== j.img
                                && ! m.$full && "stage" === b;
                            if ( ! m.$img || h || r ) {
                                var s                     = new Image,
                                    t                     = d( s ),
                                    u                     = t.data();
                                m[ r ? "$full" : "$img" ] = t;
                                var v                     = "stage" === b ? r ? "full" : "img" : "thumb",
                                    w                     = j[ v ],
                                    y                     = r ? null : j[ "stage" === b ? "thumb" : "img" ];
                                if ( "navThumb" === b && ( k = m.$wrap ), ! w ) {
                                    return void o();
                                }
                                d.Fotorama.cache[ w ] ? ! function z() {
                                    "error" === d.Fotorama.cache[ w ] ? o() :
                                        "loaded" === d.Fotorama.cache[ w ] ?
                                            setTimeout( q, 0 ) :
                                            setTimeout( z, 100 )
                                }() :
                                    ( d.Fotorama.cache[ w ] =
                                        "*", t.on( "load", q ).on( "error", o ) ), m.state =
                                    "", s.src =
                                    w
                            }
                        }
                    }
                )
            }

            function Qb( a ) {
                Ie.append( Bd.spin().el ).appendTo( a )
            }

            function Rb() {
                Ie.detach(), Bd && Bd.stop()
            }

            function Sb() {
                var a = Dd[ Xc ];
                a && ! a.data().state
                && ( Qb( a ), a.on(
                    "f:load f:error", function () {
                        a.off( "f:load f:error" ), Rb()
                    }
                ) )
            }

            function ec( a ) {
                W( a, sd ), X(
                    a, function () {
                        setTimeout(
                            function () {
                                Q( ye )
                            }, 0
                        ), Rc(
                            {
                                time      : Vd,
                                guessIndex: d( this ).data().eq,
                                minMax    : Oe
                            }
                        )
                    }
                )
            }

            function lc( a, b ) {
                cb(
                    a, b, function ( a, c, e, f, g, h ) {
                        if ( ! f ) {
                            f = e[ g ] = qe[ g ].clone(), h = f.data(), h.data = e;
                            var i = f[ 0 ];
                            "stage" === b ?
                                ( e.html && d(
                                    '<div class="' + kc
                                    + '"></div>'
                                ).append(
                                    e._html ?
                                        d( e.html ).removeAttr( "id" ).html( e._html ) :
                                        e.html
                                ).appendTo( f ), e.caption
                                && d( N( oc, N( pc, e.caption ) ) ).appendTo( f ), e.video
                                && f.addClass( zb ).append( Fe.clone() ), X(
                                    i, function () {
                                        setTimeout(
                                            function () {
                                                Q( re )
                                            }, 0
                                        ), pd(
                                            {
                                                index: h.eq,
                                                user : ! 0
                                            }
                                        )
                                    }
                                ), te = te.add( f ) ) : "navDot" === b ?
                                ( ec( i ), Ae = Ae.add( f ) ) :
                            "navThumb" === b && ( ec( i ), h.$wrap =
                                f.children( ":first" ), Be = Be.add( f ), e.video
                            && h.$wrap.append( Fe.clone() ) )
                        }
                    }
                )
            }

            function sc( a, b, c, d ) {
                return a && a.length && I( a, b, c, d )
            }

            function tc( a ) {
                cb(
                    a, "stage", function ( a, b, c, f, g, h ) {
                        if ( f ) {
                            var i = x( b ),
                                j = c.fit || e.fit,
                                k = c.position || e.position;
                            h.eq = i, Re[ Xc ][ i ] = f.css(
                                d.extend(
                                    {
                                        left: Sd ? 0 : r( b, Le.w, e.margin, Fd )
                                    }, Sd && l( 0 )
                                )
                            ), F( f[ 0 ] )
                            && ( f.appendTo( se ), md( c.$video ) ), sc( h.$img, Le, j, k ), sc( h.$full, Le, j, k )
                        }
                    }
                )
            }

            function uc( a, b ) {
                if ( "thumbs" === Nd && ! isNaN( a ) ) {
                    var c = - a,
                        f = - a + Le.nw;
                    Be.each(
                        function () {
                            var a    = d( this ),
                                g    = a.data(),
                                h    = g.eq,
                                i    = function () {
                                    return {
                                        h: Ud,
                                        w: g.w
                                    }
                                }, j = i(),
                                k    = yd[ h ] || {}, l = k.thumbfit || e.thumbfit,
                                m    = k.thumbposition || e.thumbposition;
                            j.w = g.w, g.l + g.w < c || g.l > f || sc( g.$img, j, l, m )
                            || b && Pb( [ h ], "navThumb", i, l, m )
                        }
                    )
                }
            }

            function wc( a, b, c ) {
                if ( ! wc[ c ] ) {
                    var f = "nav" === c && Od,
                        g = 0;
                    b.append(
                        a.filter(
                            function () {
                                for ( var a, b = d( this ), c = b.data(), e = 0, f =
                                    yd.length; f > e; e ++ )
                                    if ( c.data === yd[ e ] ) {
                                        a = ! 0, c.eq = e;
                                        break
                                    }
                                return a || b.remove() && ! 1
                            }
                        ).sort(
                            function ( a, b ) {
                                return d( a ).data().eq - d( b ).data().eq
                            }
                        ).each(
                            function () {
                                if ( f ) {
                                    var a = d( this ),
                                        b = a.data(),
                                        c = Math.round( Ud * b.data.thumbratio ) || Td;
                                    b.l = g, b.w = c, a.css(
                                        {
                                            width: c
                                        }
                                    ), g += c + e.thumbmargin
                                }
                            }
                        )
                    ), wc[ c ] = ! 0
                }
            }

            function xc( a ) {
                return a - Se > Le.w / 3
            }

            function yc( a ) {
                return ! ( Md || Je + a && Je - zd + a || Cd )
            }

            function Gc() {
                var a = yc( 0 ),
                    b = yc( 1 );
                ue.toggleClass( Eb, a ).attr( V( a ) ), ve.toggleClass( Eb, b ).attr( V( b ) )
            }

            function Hc() {
                Ne.ok && ( Ne.prevent = {
                    "<": yc( 0 ),
                    ">": yc( 1 )
                } )
            }

            function Lc( a ) {
                var b, c, d = a.data();
                return Od ? ( b = d.l, c = d.w ) :
                    ( b = a.position().left, c = a.width() ), {
                    c  : b + c / 2,
                    min: - b + 10 * e.thumbmargin,
                    max: - b + Le.w - c - 10 * e.thumbmargin
                }
            }

            function Oc( a ) {
                var b = Dd[ he ].data();
                _(
                    Ce, {
                        time : 1.2 * a,
                        pos  : b.l,
                        width: b.w - 2 * e.thumbborderwidth
                    }
                )
            }

            function Rc( a ) {
                var b = yd[ a.guessIndex ][ he ];
                if ( b ) {
                    var c = Oe.min !== Oe.max,
                        d = a.minMax || c && Lc( Dd[ he ] ),
                        e = c && ( a.keep && Rc.l ? Rc.l :
                                h( ( a.coo || Le.nw / 2 ) - Lc( b ).c, d.min, d.max ) ),
                        f = c && h( e, Oe.min, Oe.max ),
                        g = 1.1 * a.time;
                    _(
                        ze, {
                            time : g,
                            pos  : f || 0,
                            onEnd: function () {
                                uc( f, ! 0 )
                            }
                        }
                    ), ld( ye, K( f, Oe.min, Oe.max ) ), Rc.l = e
                }
            }

            function Tc() {
                _c( he ), Qe[ he ].push( Dd[ he ].addClass( Wb ) )
            }

            function _c( a ) {
                for ( var b = Qe[ a ]; b.length; )
                    b.shift().removeClass( Wb )
            }

            function bd( a ) {
                var b = Re[ a ];
                d.each(
                    Ed, function ( a, c ) {
                        delete b[ x( c ) ]
                    }
                ), d.each(
                    b, function ( a, c ) {
                        delete b[ a ], c.detach()
                    }
                )
            }

            function cd( a ) {
                Fd = Gd = Je;
                var b = Dd[ Xc ];
                b && ( _c( Xc ), Qe[ Xc ].push( b.addClass( Wb ) ), a
                || ie.show.onEnd( ! 0 ), v( se, 0, ! 0 ), bd( Xc ), tc( Ed ), $(), bb() )
            }

            function ed( a, b ) {
                a && d.each(
                    b, function ( b, c ) {
                        c && d.extend(
                            c, {
                                width    : a.width || c.width,
                                height   : a.height,
                                minwidth : a.minwidth,
                                maxwidth : a.maxwidth,
                                minheight: a.minheight,
                                maxheight: a.maxheight,
                                ratio    : S( a.ratio )
                            }
                        )
                    }
                )
            }

            function fd( b, c ) {
                a.trigger( ib + ":" + b, [ ie, c ] )
            }

            function gd() {
                clearTimeout( hd.t ), fe = 1, e.stopautoplayontouch ?
                    ie.stopAutoplay() : ce = ! 0
            }

            function hd() {
                fe && ( e.stopautoplayontouch || ( id(), jd() ), hd.t =
                    setTimeout(
                        function () {
                            fe = 0
                        }, Qc + Pc
                    ) )
            }

            function id() {
                ce = ! ( ! Cd && ! de )
            }

            function jd() {
                if ( clearTimeout( jd.t ), G.stop( jd.w ), ! e.autoplay || ce ) {
                    return void( ie.autoplay && ( ie.autoplay = ! 1, fd( "stopautoplay" ) ) );
                }
                ie.autoplay || ( ie.autoplay = ! 0, fd( "startautoplay" ) );
                var a = Je,
                    b = Dd[ Xc ].data();
                jd.w  = G(
                    function () {
                        return b.state || a !== Je
                    }, function () {
                        jd.t = setTimeout(
                            function () {
                                if ( ! ce && a === Je ) {
                                    var b = Kd,
                                        c = yd[ b ][ Xc ].data();
                                    jd.w  = G(
                                        function () {
                                            return c.state || b !== Kd
                                        }, function () {
                                            ce || b !== Kd || ie.show( Md ? Z( ! Yd ) : Kd )
                                        }
                                    )
                                }
                            }, e.autoplay
                        )
                    }
                )
            }

            function kd() {
                ie.fullScreen && ( ie.fullScreen = ! 1, Kc
                && vc.cancel( le ), Dc.removeClass( jb ), Cc.removeClass( jb ), a.removeClass( Zb ).insertAfter( pe ), Le =
                    d.extend( {}, ee ), md( Cd, ! 0, ! 0 ), rd( "x", ! 1 ), ie.resize(), Pb( Ed, "stage" ), Q( Ec, ae, _d ), fd( "fullscreenexit" ) )
            }

            function ld( a, b ) {
                Xd && ( a.removeClass( Ub + " " + Vb ), b && ! Cd
                && a.addClass( b.replace( /^|\s/g, " " + Tb + "--" ) ) )
            }

            function md( a, b, c ) {
                b && ( qe.removeClass( nb ), Cd = ! 1, o() ), a && a !== Cd
                && ( a.remove(), fd( "unloadvideo" ) ), c && ( id(), jd() )
            }

            function nd( a ) {
                qe.toggleClass( qb, a )
            }

            function od( a ) {
                if ( ! Me.flow ) {
                    var b = a ? a.pageX : od.x,
                        c = b && ! yc( xc( b ) ) && e.click;
                    od.p !== c && re.toggleClass( Cb, c ) && ( od.p = c, od.x = b )
                }
            }

            function pd( a ) {
                clearTimeout( pd.t ), e.clicktransition && e.clicktransition
                !== e.transition ?
                    setTimeout(
                        function () {
                            var b = e.transition;
                            ie.setOptions(
                                {
                                    transition: e.clicktransition
                                }
                            ), Wd = b, pd.t = setTimeout(
                                function () {
                                    ie.show( a )
                                }, 10
                            )
                        }, 0
                    ) : ie.show( a )
            }

            function qd( a, b ) {
                var c = a.target,
                    f = d( c );
                f.hasClass( mc ) ? ie.playVideo() : c === Ee ?
                    ie.toggleFullScreen() : Cd ?
                c === He && md( Cd, ! 0, ! 0 ) :
                    b ? nd() : e.click && pd(
                        {
                            index: a.shiftKey || Z( xc( a._x ) ),
                            slow : a.altKey,
                            user : ! 0
                        }
                    )
            }

            function rd( a, b ) {
                Me[ a ] = Oe[ a ] = b
            }

            function sd( a ) {
                var b = d( this ).data().eq;
                pd(
                    {
                        index: b,
                        slow : a.altKey,
                        user : ! 0,
                        coo  : a._x - ye.offset().left
                    }
                )
            }

            function td( a ) {
                pd(
                    {
                        index: we.index( this ) ? ">" : "<",
                        slow : a.altKey,
                        user : ! 0
                    }
                )
            }

            function ud( a ) {
                X(
                    a, function () {
                        setTimeout(
                            function () {
                                Q( re )
                            }, 0
                        ), nd( ! 1 )
                    }
                )
            }

            function vd() {
                if ( m(), u(), ! vd.i ) {
                    vd.i  = ! 0;
                    var a = e.startindex;
                    ( a || e.hash && c.hash ) && ( Ld = L(
                        a
                        || c.hash.replace( /^#/, "" ), yd, 0 === ie.index
                        || a, a
                    ) ), Je =
                        Fd = Gd = Hd = Ld = z( Ld ) || 0
                }
                if ( zd ) {
                    if ( wd() ) {
                        return;
                    }
                    Cd && md( Cd, ! 0 ), Ed = [], bd( Xc ), vd.ok = ! 0, ie.show(
                        {
                            index: Je,
                            time : 0
                        }
                    ), ie.resize()
                }
                else {
                    ie.destroy()
                }
            }

            function wd() {
                return ! wd.f === Yd ?
                    ( wd.f = Yd, Je = zd - 1 - Je, ie.reverse(), ! 0 ) : void 0
            }

            function xd() {
                xd.ok || ( xd.ok = ! 0, fd( "ready" ) )
            }

            Cc = d( "html" ), Dc = d( "body" );
            var yd, zd, Ad, Bd, Cd, Dd, Ed, Fd, Gd, Hd, Id, Jd, Kd, Ld, Md, Nd, Od, Pd, Qd, Rd, Sd, Td, Ud, Vd, Wd, Xd, Yd, Zd, $d, _d, ae, be, ce, de, ee, fe, ge, he, ie =
                    this,
                je = d.now(),
                ke = ib + je,
                le = a[ 0 ],
                me = 1,
                ne = a.data(),
                oe = d( "<style></style>" ),
                pe = d( N( Yb ) ),
                qe = d( N( kb ) ),
                re = d( N( xb ) ).appendTo( qe ),
                se = ( re[ 0 ], d( N( Ab ) ).appendTo( re ) ),
                te = d(),
                ue = d( N( Db + " " + Fb + rc ) ),
                ve = d( N( Db + " " + Gb + rc ) ),
                we = ue.add( ve ).appendTo( re ),
                xe = d( N( Ib ) ),
                ye = d( N( Hb ) ).appendTo( xe ),
                ze = d( N( Jb ) ).appendTo( ye ),
                Ae = d(),
                Be = d(),
                Ce = ( se.data(), ze.data(), d( N( jc ) ).appendTo( ze ) ),
                De = d( N( $b + rc ) ),
                Ee = De[ 0 ],
                Fe = d( N( mc ) ),
                Ge = d( N( nc ) ).appendTo( re ),
                He = Ge[ 0 ],
                Ie = d( N( qc ) ),
                Je = ! 1,
                Ke = {}, Le = {}, Me = {}, Ne = {}, Oe = {}, Pe = {}, Qe =
                {}, Re = {}, Se = 0,
                Te = [];
            qe[ Xc ] = d( N( yb ) ), qe[ Zc ] = d(
                N(
                    Mb + " " + Ob
                    + rc, N( ic )
                )
            ), qe[ Yc ] = d(
                N(
                    Mb + " " + Nb
                    + rc, N( hc )
                )
            ), Qe[ Xc ] = [], Qe[ Zc ] = [], Qe[ Yc ] =
                [], Re[ Xc ] =
            {}, qe.addClass(
                Ic ?
                    mb :
                    lb
            ).toggleClass( qb, ! e.controlsonstart ), ne.fotorama =
                this, ie.startAutoplay = function ( a ) {
                return ie.autoplay ? this :
                    ( ce = de = ! 1, t( a || e.autoplay ), jd(), this )
            }, ie.stopAutoplay = function () {
                return ie.autoplay && ( ce = de = ! 0, jd() ), this
            }, ie.show = function ( a ) {
                var b;
                "object" != typeof a ? ( b = a, a = {} ) :
                    b = a.index, b = ">" === b ? Gd + 1 : "<" === b ? Gd - 1 :
                    "<<" === b ? 0 : ">>" === b ? zd - 1 : b, b = isNaN( b ) ?
                    L( b, yd, ! 0 ) : b, b = "undefined" == typeof b ?
                Je || 0 :
                    b, ie.activeIndex = Je = z( b ), Id = E( Je ), Jd =
                    U( Je ), Kd = x(
                    Je + ( Yd ?
                        - 1 : 1 )
                ), Ed = [ Je, Id, Jd ], Gd = Md ? b : Je;
                var c          = Math.abs( Hd - Gd ),
                    d          = w(
                        a.time, function () {
                            return Math.min( Vd * ( 1 + ( c - 1 ) / 12 ), 2 * Vd )
                        }
                    ),
                    f          = a.overPos;
                a.slow && ( d *= 10 );
                var g          = Dd;
                ie.activeFrame = Dd = yd[ Je ];
                var i = g === Dd && ! a.user;
                md( Cd, Dd.i !== yd[ x( Fd ) ].i ), lc( Ed, "stage" ), tc(
                    Mc ?
                        [ Gd ] :
                        [ Gd, E( Gd ), U( Gd ) ]
                ), rd( "go", ! 0 ), i || fd(
                    "show", {
                        user: a.user,
                        time: d
                    }
                ), ce = ! 0;
                var j = ie.show.onEnd = function ( b ) {
                    if ( ! j.ok ) {
                        if ( j.ok = ! 0, b || cd( ! 0 ), i || fd(
                                "showend", {
                                    user: a.user
                                }
                            ), ! b && Wd && Wd !== e.transition ) {
                            return ie.setOptions(
                                {
                                    transition: Wd
                                }
                            ), void( Wd = ! 1 );
                        }
                        Sb(), Pb( Ed, "stage" ), rd( "go", ! 1 ), Hc(), od(), id(), jd()
                    }
                };
                if ( Sd ) {
                    var k = Dd[ Xc ],
                        l = Je !== Hd ? yd[ Hd ][ Xc ] : null;
                    ab(
                        k, l, te, {
                            time  : d,
                            method: e.transition,
                            onEnd : j
                        }, Te
                    )
                }
                else {
                    _(
                        se, {
                            pos    : - r( Gd, Le.w, e.margin, Fd ),
                            overPos: f,
                            time   : d,
                            onEnd  : j
                        }
                    );
                }
                if ( Gc(), Nd ) {
                    Tc();
                    var m = y( Je + h( Gd - Hd, - 1, 1 ) );
                    Rc(
                        {
                            time      : d,
                            coo       : m !== Je && a.coo,
                            guessIndex: "undefined" != typeof a.coo ? m : Je,
                            keep      : i
                        }
                    ), Od && Oc( d )
                }
                return be = "undefined" != typeof Hd && Hd !== Je, Hd =
                    Je, e.hash && be && ! ie.eq && H( Dd.id || Je + 1 ), this
            }, ie.requestFullScreen = function () {
                return Qd && ! ie.fullScreen && ( _d = Ec.scrollTop(), ae =
                    Ec.scrollLeft(), Q( Ec ), rd( "x", ! 0 ), ee =
                    d.extend( {}, Le ), a.addClass( Zb ).appendTo( Dc.addClass( jb ) ), Cc.addClass( jb ), md( Cd, ! 0, ! 0 ), ie.fullScreen = ! 0, Rd
                && vc.request( le ), ie.resize(), Pb( Ed, "stage" ), Sb(), fd( "fullscreenenter" ) ), this
            }, ie.cancelFullScreen = function () {
                return Rd && vc.is() ? vc.cancel( b ) : kd(), this
            }, ie.toggleFullScreen = function () {
                return ie[ ( ie.fullScreen ? "cancel" :
                    "request" ) + "FullScreen" ]()
            }, T(
                b, vc.event, function () {
                    ! yd || vc.is() || Cd || kd()
                }
            ), ie.resize = function ( a ) {
                if ( ! yd ) {
                    return this;
                }
                var b = arguments[ 1 ] || 0,
                    c = arguments[ 2 ];
                ed(
                    ie.fullScreen ? {
                        width    : "100%",
                        maxwidth : null,
                        minwidth : null,
                        height   : "100%",
                        maxheight: null,
                        minheight: null
                    } : R( a ), [ Le, c || ie.fullScreen || e ]
                );
                var d = Le.width,
                    f = //Le.height,
                        window.innerWidth > 767 && document.body.className.indexOf('inverse') !== -1 ? window.innerHeight - 80 :
                            window.innerWidth > 767 ? window.innerHeight - 62 : window.innerWidth / 2,
                    g = Le.ratio,
                    i = Ec.height() - ( Nd ? ye.height() : 0 );
//            if( window.width ){
//                f = window.innerHeight ? window.innerHeight - 62 : $(window).height() - 62;
//            }
                return q( d ) && ( qe.addClass( ub ).css(
                    {
                        width   : d,
                        minWidth: Le.minwidth || 0,
                        maxWidth: Le.maxwidth || ad
                    }
                ), d = Le.W = Le.w = qe.width(), Le.nw = Nd
                    && p( e.navwidth, d ) || d, e.glimpse && ( Le.w -= Math.round(
                    2
                    * ( p( e.glimpse, d ) || 0 )
                ) ), se.css(
                    {
                        width     : Le.w,
                        marginLeft: ( Le.W - Le.w ) / 2
                    }
                ), f = p( f, i ), f = f || g && d / g, f && ( d =
                    Math.round( d ), f = Le.h =
                    Math.round( h( f, p( Le.minheight, i ), p( Le.maxheight, i ) ) ), re.stop().animate(
                    {
                        width : d,
                        height: f
                    }, b, function () {
                        qe.removeClass( ub )
                    }
                ), cd(), Nd && ( ye.stop().animate(
                    {
                        width: Le.nw
                    }, b
                ), Rc(
                    {
                        guessIndex: Je,
                        time      : b,
                        keep      : ! 0
                    }
                ), Od && wc.nav && Oc( b ) ), $d = c || ! 0, xd() ) ), Se =
                    re.offset().left, this
            }, ie.setOptions = function ( a ) {
                return d.extend( e, a ), vd(), this
            }, ie.shuffle = function () {
                return yd && O( yd ) && vd(), this
            }, ie.destroy = function () {
                return ie.cancelFullScreen(), ie.stopAutoplay(), yd = ie.data =
                    null, j(), Ed = [], bd( Xc ), vd.ok = ! 1, this
            }, ie.playVideo = function () {
                var a = Dd,
                    b = a.video,
                    c = Je;
                return "object" == typeof b && a.videoReady && ( Rd
                && ie.fullScreen && ie.cancelFullScreen(), G(
                    function () {
                        return ! vc.is() || c !== Je
                    }, function () {
                        c === Je && ( a.$video = a.$video
                            || d( d.Fotorama.jst.video( b ) ), a.$video.appendTo( a[ Xc ] ), qe.addClass( nb ), Cd =
                            a.$video, o(), we.blur(), De.blur(), fd( "loadvideo" ) )
                    }
                ) ), this
            }, ie.stopVideo = function () {
                return md( Cd, ! 0, ! 0 ), this
            }, re.on( "mousemove", od ), Me = db(
                se, {
                    onStart   : gd,
                    onMove    : function ( a, b ) {
                        ld( re, b.edge )
                    },
                    onTouchEnd: hd,
                    onEnd     : function ( a ) {
                        ld( re );
                        var b = ( Nc && ! ge || a.touch ) && e.arrows && "always"
                            !== e.arrows;
                        if ( a.moved || b && a.pos !== a.newPos && ! a.control ) {
                            var c = s( a.newPos, Le.w, e.margin, Fd );
                            ie.show(
                                {
                                    index  : c,
                                    time   : Sd ? Vd : a.time,
                                    overPos: a.overPos,
                                    user   : ! 0
                                }
                            )
                        }
                        else {
                            a.aborted || a.control || qd( a.startEvent, b )
                        }
                    },
                    timeLow   : 1,
                    timeHigh  : 1,
                    friction  : 2,
                    select    : "." + Xb + ", ." + Xb + " *",
                    $wrap     : re
                }
            ), Oe = db(
                ze, {
                    onStart   : gd,
                    onMove    : function ( a, b ) {
                        ld( ye, b.edge )
                    },
                    onTouchEnd: hd,
                    onEnd     : function ( a ) {
                        function b() {
                            Rc.l = a.newPos, id(), jd(), uc( a.newPos, ! 0 )
                        }

                        if ( a.moved ) {
                            a.pos !== a.newPos ? ( ce = ! 0, _(
                                ze, {
                                    time   : a.time,
                                    pos    : a.newPos,
                                    overPos: a.overPos,
                                    onEnd  : b
                                }
                            ), uc( a.newPos ), Xd
                            && ld( ye, K( a.newPos, Oe.min, Oe.max ) ) ) :
                                b();
                        }
                        else {
                            var c = a.$target.closest( "." + Mb, ze )[ 0 ];
                            c && sd.call( c, a.startEvent )
                        }
                    },
                    timeLow   : .5,
                    timeHigh  : 2,
                    friction  : 5,
                    $wrap     : ye
                }
            ), Ne = eb(
                re, {
                    shift: ! 0,
                    onEnd: function ( a, b ) {
                        gd(), hd(), ie.show(
                            {
                                index: b,
                                slow : a.altKey
                            }
                        )
                    }
                }
            ), Pe = eb(
                ye, {
                    onEnd: function ( a, b ) {
                        gd(), hd();
                        var c = v( ze ) + .25 * b;
                        ze.css( k( h( c, Oe.min, Oe.max ) ) ), Xd
                        && ld( ye, K( c, Oe.min, Oe.max ) ), Pe.prevent = {
                            "<": c >= Oe.max,
                            ">": c <= Oe.min
                        }, clearTimeout( Pe.t ), Pe.t = setTimeout(
                            function () {
                                Rc.l = c, uc( c, ! 0 )
                            }, Pc
                        ), uc( c )
                    }
                }
            ), qe.hover(
                function () {
                    setTimeout(
                        function () {
                            fe || nd( ! ( ge = ! 0 ) )
                        }, 0
                    )
                }, function () {
                    ge && nd( ! ( ge = ! 1 ) )
                }
            ), M(
                we, function ( a ) {
                    Y( a ), td.call( this, a )
                }, {
                    onStart   : function () {
                        gd(), Me.control = ! 0
                    },
                    onTouchEnd: hd
                }
            ), we.each(
                function () {
                    W(
                        this, function ( a ) {
                            td.call( this, a )
                        }
                    ), ud( this )
                }
            ), W( Ee, ie.toggleFullScreen ), ud( Ee ), d.each(
                "load push pop shift unshift reverse sort splice".split( " " ), function ( a, b ) {
                    ie[ b ] = function () {
                        return yd = yd || [], "load" !== b ?
                            Array.prototype[ b ].apply( yd, arguments ) :
                        arguments[ 0 ] && "object" == typeof arguments[ 0 ]
                        && arguments[ 0 ].length && ( yd = P( arguments[ 0 ] ) ), vd(), ie
                    }
                }
            ), vd()
        }, d.fn.fotorama = function ( b ) {
            return this.each(
                function () {
                    var c = this,
                        e = d( this ),
                        f = e.data(),
                        g = f.fotorama;
                    g ? g.setOptions( b, ! 0 ) : G(
                        function () {
                            return ! E( c )
                        }, function () {
                            f.urtext =
                                e.html(), new d.Fotorama( e, d.extend( {}, cd, a.fotoramaDefaults, b, f ) )
                        }
                    )
                }
            )
        }, d.Fotorama.instances = [], d.Fotorama.cache =
        {}, d.Fotorama.measures = {}, d = d || {}, d.Fotorama = d.Fotorama
            || {}, d.Fotorama.jst = d.Fotorama.jst
            || {}, d.Fotorama.jst.style =
            function ( a ) {
                {
                    var b, c = "";
                    tc.escape
                }
                return c += ".fotorama" + ( null == ( b = a.s ) ? "" :
                        b ) + " .fotorama__nav--thumbs .fotorama__nav__frame{\npadding:"
                    + ( null == ( b = a.m ) ?
                        "" : b ) + "px;\nheight:" + ( null == ( b = a.h ) ? "" :
                        b ) + "px}\n.fotorama" + ( null == ( b = a.s ) ? "" :
                        b ) + " .fotorama__thumb-border{\nheight:" + ( null == ( b = a.h
                        - a.b * ( a.q ?
                            0 : 2 ) ) ? "" :
                        b ) + "px;\nborder-width:" + ( null == ( b = a.b ) ?
                        "" : b ) + "px;\nmargin-top:" + ( null == ( b = a.m ) ? "" :
                        b ) + "px}"
            }, d.Fotorama.jst.video = function ( a ) {
            function b() {
                c += d.call( arguments, "" )
            }

            var c = "",
                d = ( tc.escape, Array.prototype.join );
            return c +=
                '<div class="fotorama__video"><iframe src="', b(
                ( "youtube"
                == a.type ?
                a.p + "youtube.com/embed/" + a.id + "?autoplay=1" :
                    "vimeo" == a.type ?
                    a.p + "player.vimeo.com/video/" + a.id + "?autoplay=1&badge=0" :
                        a.id ) + ( a.s && "custom" != a.type ?
                "&" + a.s :
                    "" )
            ), c += '" frameborder="0" allowfullscreen></iframe></div>\n'
        }, d(
            function () {
                d( "." + ib + ':not([data-auto="false"])' ).fotorama()
            }
        )
    }(
        window, document, location, "undefined" !== typeof jQuery
        && jQuery
    );