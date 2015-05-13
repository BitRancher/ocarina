# WIP WIP WIP WIP WIP #

# ocarina #
Functional JavaScript datetime library for plain ol' timestamps.


## Design Philosophy ##

### Primitive ###

**ocarina** acts on simple unix UTC timestamps. Since you don't have to convert dates to special objects before you manipulate them, they remain serializable with a simple JSON.stringify. Great if you have a bunch of dates nested in your app state, but you want to keep it serializable, interoperable, and all-around portable.

### Functional ###

Wow, so trendy. Of course, timestamps are just numbers, which are already immutable in JS, so that helps. All ocarina functions are referentially transparent, pure, idempotent, etc etc. They are also **curry-friendly**.

### Curry-Friendly ###

This is worth emphasizing since **ocarina** function parameter ordering may seem backwards to people unfamiliar with it. Look it up, I will explain later.

### Utilities for getting in and out of **ocarina** land ###

If you're receiving dates from some external service in some weird format, just convert it to a timestamp using `ocarina.fromString(format, dateString)`. The format parameter does the same thing you know and love from **Moment** (shout out!). When sending dates back over the wire, you can convert them back to whatever weird string format you need to with `ocarina.format(format, timestamp)`.

### Goal #1 for this Project ###

Just make it a moment wrapper for now.