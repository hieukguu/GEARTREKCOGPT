$ErrorActionPreference = 'Stop'
$destination = Join-Path $PSScriptRoot '..\public\products\2026'
New-Item -ItemType Directory -Force $destination | Out-Null

$images = @(
  @{ Name = 'hoka-speedgoat-6.jpg'; Url = 'https://media.au.hoka.com/cdn-cgi/image/fit%3Dscale-down%2Cf%3Dauto%2Cw%3D1280/products/c55265cb-8a20-438e-80d9-f44208651ee2/92b88479/1147791-osh_osh_06.jpg' },
  @{ Name = 'salomon-speedcross-6.png'; Url = 'https://salomon.jp/cdn/shop/files/L49225100_8_GHO_SPEEDCROSS6Black_FieryRed_AlmondMilk.png?v=1768279443' },
  @{ Name = 'garmin-inreach-mini-2.jpg'; Url = 'https://res.garmin.com/transform/image/upload/b_rgb%3AFFFFFF%2Cc_pad%2Cdpr_2.0%2Cf_auto%2Ch_800%2Cq_auto%2Cw_800/c_pad%2Ch_800%2Cw_800/v1/Product_Images/en/products/010-02602-02/v/cf-xl-2bcc8124-881a-422f-b5e1-f1536e45267b?pgw=1' },
  @{ Name = 'nemo-fillo.jpg'; Url = 'https://www.nemoequipment.com/cdn/shop/files/03_Fillo-Mango_811666035998_03-Main-Back.jpg?v=1772661410' },
  @{ Name = 'outdoor-research-crocodile.png'; Url = 'https://www.outdoorresearch.com/cdn/shop/files/3224800014.png?v=1744758176&width=1200' },
  @{ Name = 'darn-tough-hiker.png'; Url = 'https://darntough.com/cdn/shop/products/mlaxp81fxu8q94yattej_9d35c1e4-2d8a-47ee-ad16-78ffc4ff417c_1800x1800.png?v=1722879937' },
  @{ Name = 'leatherman-signal.jpg'; Url = 'https://www.domesticdomestic.com/cdn/shop/files/Untitled_72_ff95950f-e6d0-458a-9e4a-8230776d2ddc.jpg?v=1736281314' },
  @{ Name = 'sea-to-summit-aeros.jpg'; Url = 'https://seatosummit.eu/cdn/shop/products/APILPREMLLI_AerosPremiumPillow_Large_Lime_02-1200x893-8f7a23f.jpg?crop=center&height=1500&v=1660052617&width=1500' },
  @{ Name = 'patagonia-quandary.png'; Url = 'https://www.patagonia.co.nz/cdn/shop/files/55183_CSC.png?v=1739935388' },
  @{ Name = 'eno-doublenest.jpg'; Url = 'https://eaglesnestoutfittersinc.com/cdn/shop/products/eno-seaglass-grey-doublenest-test-hammock-33151172247701.jpg?v=1757532642&width=1920' },
  @{ Name = 'kahtoola-renagaiter.jpg'; Url = 'https://cdn11.bigcommerce.com/s-m69x292sg4/images/stencil/1280x1280/products/155/1180/RENAgaiterLow_Evergreen1__25566.1772081770.jpg?c=1' }
)

foreach ($image in $images) {
  $output = Join-Path $destination $image.Name
  Invoke-WebRequest -Uri $image.Url -OutFile $output
  if ((Get-Item $output).Length -lt 10000) { throw "Downloaded image is unexpectedly small: $($image.Name)" }
}
