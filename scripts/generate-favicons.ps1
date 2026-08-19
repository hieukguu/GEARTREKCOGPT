Add-Type -AssemblyName System.Drawing

$projectRoot = Split-Path -Parent $PSScriptRoot
$publicDir = Join-Path $projectRoot "public"

function New-GearTrekIcon {
    param(
        [int]$Size,
        [string]$OutputPath
    )

    $bitmap = New-Object System.Drawing.Bitmap($Size, $Size)
    $graphics = [System.Drawing.Graphics]::FromImage($bitmap)
    $graphics.SmoothingMode = [System.Drawing.Drawing2D.SmoothingMode]::AntiAlias
    $graphics.Clear([System.Drawing.Color]::FromArgb(53, 66, 47))

    $scale = $Size / 64.0
    $mountain = New-Object System.Drawing.Drawing2D.GraphicsPath
    $points = @(
        [System.Drawing.PointF]::new(10 * $scale, 40 * $scale),
        [System.Drawing.PointF]::new(26.5 * $scale, 17 * $scale),
        [System.Drawing.PointF]::new(34.8 * $scale, 28.1 * $scale),
        [System.Drawing.PointF]::new(41 * $scale, 20 * $scale),
        [System.Drawing.PointF]::new(54 * $scale, 40 * $scale),
        [System.Drawing.PointF]::new(42.8 * $scale, 40 * $scale),
        [System.Drawing.PointF]::new(34.8 * $scale, 29 * $scale),
        [System.Drawing.PointF]::new(30.6 * $scale, 34.8 * $scale),
        [System.Drawing.PointF]::new(27 * $scale, 30 * $scale),
        [System.Drawing.PointF]::new(20 * $scale, 40 * $scale)
    )
    $mountain.AddPolygon($points)
    $creamBrush = New-Object System.Drawing.SolidBrush([System.Drawing.Color]::FromArgb(243, 240, 232))
    $graphics.FillPath($creamBrush, $mountain)

    $trailPen = New-Object System.Drawing.Pen([System.Drawing.Color]::FromArgb(228, 101, 53), [Math]::Max(2, 4 * $scale))
    $trailPen.StartCap = [System.Drawing.Drawing2D.LineCap]::Round
    $trailPen.EndCap = [System.Drawing.Drawing2D.LineCap]::Round
    $trailPen.LineJoin = [System.Drawing.Drawing2D.LineJoin]::Round
    $trailPoints = @(
        [System.Drawing.PointF]::new(51 * $scale, 42 * $scale),
        [System.Drawing.PointF]::new(36.5 * $scale, 42 * $scale),
        [System.Drawing.PointF]::new(25.5 * $scale, 48.7 * $scale),
        [System.Drawing.PointF]::new(34.7 * $scale, 54.9 * $scale),
        [System.Drawing.PointF]::new(44.8 * $scale, 50.2 * $scale),
        [System.Drawing.PointF]::new(35.2 * $scale, 50.2 * $scale)
    )
    $graphics.DrawLines($trailPen, $trailPoints)

    $bitmap.Save($OutputPath, [System.Drawing.Imaging.ImageFormat]::Png)
    $trailPen.Dispose()
    $creamBrush.Dispose()
    $mountain.Dispose()
    $graphics.Dispose()
    $bitmap.Dispose()
}

New-GearTrekIcon -Size 32 -OutputPath (Join-Path $publicDir "favicon-32x32.png")
New-GearTrekIcon -Size 180 -OutputPath (Join-Path $publicDir "apple-touch-icon.png")
New-GearTrekIcon -Size 192 -OutputPath (Join-Path $publicDir "favicon-192x192.png")
New-GearTrekIcon -Size 512 -OutputPath (Join-Path $publicDir "favicon-512x512.png")
Copy-Item -LiteralPath (Join-Path $publicDir "favicon-32x32.png") -Destination (Join-Path $publicDir "favicon.ico") -Force
