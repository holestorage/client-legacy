export default function FileIcon({type}) {
    const value = {
        fallback: {
            icon: 'fa-light fa-file'
        },
        types: {
            list: [
                {
                    "name": "image",
                    "icon": "fa-regular fa-image",
                    "list": [
                        {"extension": "jpg", "mimetype": "image/jpeg"},
                        {"extension": "jpeg", "mimetype": "image/jpeg"},
                        {"extension": "png", "mimetype": "image/png"},
                        {"extension": "gif", "mimetype": "image/gif"},
                        {"extension": "bmp", "mimetype": "image/bmp"},
                        {"extension": "tiff", "mimetype": "image/tiff"},
                        {"extension": "webp", "mimetype": "image/webp"},
                        {"extension": "svg", "mimetype": "image/svg+xml"},
                        {"extension": "ico", "mimetype": "image/x-icon"}
                    ]
                },
                {
                    "name": "video",
                    "icon": "fa-regular fa-video",
                    "list": [
                        {"extension": "mp4", "mimetype": "video/mp4"},
                        {"extension": "webm", "mimetype": "video/webm"},
                        {"extension": "mov", "mimetype": "video/quicktime"},
                        {"extension": "avi", "mimetype": "video/x-msvideo"},
                        {"extension": "wmv", "mimetype": "video/x-ms-wmv"},
                        {"extension": "mkv", "mimetype": "video/x-matroska"},
                        {"extension": "flv", "mimetype": "video/x-flv"},
                        {"extension": "m4v", "mimetype": "video/x-m4v"},
                        {"extension": "mpeg", "mimetype": "video/mpeg"},
                        {"extension": "3gp", "mimetype": "video/3gpp"}
                    ]
                },
                {
                    "name": "executable",
                    "icon": "fa-regular fa-cogs",
                    "list": [
                        {"extension": "exe", "mimetype": "application/x-msdownload"},
                        {"extension": "msi", "mimetype": "application/x-msi"},
                        {"extension": "dmg", "mimetype": "application/x-apple-diskimage"},
                        {"extension": "deb", "mimetype": "application/x-debian-package"},
                        {"extension": "rpm", "mimetype": "application/x-rpm"},
                        {"extension": "apk", "mimetype": "application/vnd.android.package-archive"}
                    ]
                },
                {
                    "name": "font",
                    "icon": "fa-regular fa-font",
                    "list": [
                        {"extension": "ttf", "mimetype": "font/ttf"},
                        {"extension": "otf", "mimetype": "font/otf"},
                        {"extension": "woff", "mimetype": "font/woff"},
                        {"extension": "woff2", "mimetype": "font/woff2"},
                        {"extension": "eot", "mimetype": "application/vnd.ms-fontobject"}
                    ]
                }
            ]
        }
    }

    return (
        <i className={value.types.list.find((value) => value.list.some((item) => item.mimetype === type))?.icon || 'fa-regular fa-file'} />
    )
}
