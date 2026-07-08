# v3_selfc_08_ko — 전 이벤트 시간순 타임라인 (L=agent/R=user)
# <ret>=agent 턴 첫 프레임(lead 첫 토큰 대체) · SPAN=lead 안 d' 지점(문장 중간 가능, Eq.3 sample_rag_delay)

     0.00s  user  발화 시작: 의자 좀 사줄래, 200달러짜리로?
     1.76s  <ret> 발화 (turn1 첫 프레임)
     2.35s  agent 발화 시작: <ret> 네, 그러시군요. 책상 의자 주문이 완료됐습니다. 주문 번호는 87654번입니다.
     2.40s  ⚡SPAN 주입 [d'=0.64s / d_lead=0.68s]: (tool result) Order created. Desk chair, two hundred dollars, order nu
     2.50s  user  발화 끝
     8.46s  agent 발화 끝
     9.93s  user  발화 시작: 좋네. 음, 마이애미 호텔 좀 찾아줄래?
    14.79s  user  발화 끝
    14.95s  agent 발화 시작: 물론이죠. 며칠 동안 머무실 예정이신가요?
    18.12s  user  발화 시작: 12월 20일부터 22일까지.
    18.18s  agent 발화 끝
    19.80s  <ret> 발화 (turn5 첫 프레임)
    20.39s  agent 발화 시작: <ret> 잠시만 확인해 볼게요. 마이애미에 있는 호텔 네 곳을 찾았습니다. 오션 뷰 호텔이 1박에 150달
    20.52s  user  발화 끝
    20.80s  ⚡SPAN 주입 [d'=1.00s / d_lead=1.99s]: (tool result) Four hotels found. The cheapest is $150 per night at the
    28.36s  agent 발화 끝
    29.48s  user  발화 시작: 150달러면 괜찮네. 거기 방 예약해 줄래?
    32.13s  <ret> 발화 (turn7 첫 프레임)
    32.72s  agent 발화 시작: <ret> 네, 그렇게 해 드릴 수 있습니다. 오션 뷰 호텔에 12월 20일부터 22일까지 객실이 예약되었고
    32.72s  user  발화 끝
    33.13s  ⚡SPAN 주입 [d'=1.00s / d_lead=2.73s]: (tool result) Booking confirmed. Ocean View Hotel, December twentieth 
    43.08s  user  발화 시작: 좋아. 마이애미 날씨 예보는 어때?
    43.10s  agent 발화 끝
    45.68s  <ret> 발화 (turn9 첫 프레임)
    46.27s  agent 발화 시작: <ret> 알아볼게요. 마이애미는 맑고, 최고 기온은 28도, 최저 기온은 22도입니다. 비가 올 확률은 1
    46.32s  user  발화 끝
    46.64s  ⚡SPAN 주입 [d'=0.96s / d_lead=2.25s]: (tool result) Sunny, 28 degrees Celsius, low of 22 degrees Celsius, 10
    53.60s  agent 발화 끝
    53.68s  user  발화 시작: 좋네. 저… 혹시 마이애미 근처 산호초에 대해 아는 거 있어?
    59.34s  agent 발화 시작: 해양 생물학자로서, 그 주제는 제게 정말 중요한 부분입니다.
    59.48s  user  발화 끝
    63.55s  agent 발화 끝
    64.05s  user  발화 시작: 오, 진짜? 거기서 어떤 산호들을 볼 수 있어?
    67.06s  <ret> 발화 (turn13 첫 프레임)
    67.64s  agent 발화 시작: <ret> 산호초는 꽤 다양합니다. 마이애미 근처에서는 엘크혼과 스테그혼 산호가 흔한데, 안타깝게도 둘 다 
    67.79s  user  발화 끝
    68.06s  ⚡SPAN 주입 [d'=1.00s / d_lead=3.07s]: (tool result) The most common corals are Elkhorn and Staghorn, both li
    77.45s  user  발화 시작: 멸종 위기라고? 그건… 걱정되네. 왜 그런 거야?
    77.47s  agent 발화 끝
    81.79s  agent 발화 시작: 산호초는 수온 상승과 오염을 포함한 수많은 문제에 직면해 있습니다.
    81.98s  user  발화 끝
    86.65s  agent 발화 끝
    87.36s  user  발화 시작: 그걸 돕기 위해 하는 일이 있어?
    88.94s  <ret> 발화 (turn17 첫 프레임)
    89.53s  agent 발화 시작: <ret> 상당한 복원 노력이 이루어지고 있습니다. 산호 양식장에서 산호를 키우고 이식하는 것은 산호초 복원
    89.71s  user  발화 끝
    89.94s  ⚡SPAN 주입 [d'=1.00s / d_lead=2.64s]: (tool result) Coral restoration projects are underway, focusing on gro
    97.45s  agent 발화 끝
    97.78s  user  발화 시작: 그건 다행이네. 마이애미에서 괜찮은 해산물 식당 좀 찾아줄래?
   101.80s  <ret> 발화 (turn19 첫 프레임)
   102.40s  agent 발화 시작: <ret> 네, 찾아볼 수 있습니다. 조스 스톤 크랩은 마이애미에서 평점이 매우 높은 해산물 식당으로, 1인
   102.50s  user  발화 끝
   102.80s  ⚡SPAN 주입 [d'=1.00s / d_lead=2.90s]: (tool result) Joe's Stone Crab is highly rated, average cost $60 per p
   110.14s  agent 발화 끝
   111.70s  user  발화 시작: 60달러면 괜찮네. 12월 20일 저녁 7시에 두 명으로 예약해 줄래?
   116.50s  <ret> 발화 (turn21 첫 프레임)
   117.09s  agent 발화 시작: <ret> 예약이 가능한지 확인해 보겠습니다. 조스 스톤 크랩에 12월 20일 저녁 7시에 두 분으로 예약이
   117.26s  user  발화 끝
   117.50s  ⚡SPAN 주입 [d'=1.00s / d_lead=4.26s]: (tool result) Reservation confirmed. Joe's Stone Crab, December twenti
   126.63s  user  발화 시작: 완벽하네. [laugh] 교통은 어때? 차를 빌려야 할까?
   126.68s  agent 발화 끝
   131.22s  agent 발화 시작: 마이애미는 대중교통 시스템이 잘 갖춰져 있지만, 렌터카를 이용하면 더 편리합니다.
   131.31s  user  발화 끝
   136.45s  agent 발화 끝
   137.13s  user  발화 시작: 알았어, 차를 빌리자. 그 날짜에 소형차를 빌려줄래?
   140.38s  <ret> 발화 (turn25 첫 프레임)
   140.46s  ⚡SPAN 주입 [d'=0.08s / d_lead=0.59s]: (tool result) Compact car available from Avis, $50 per day, total $100
   140.98s  agent 발화 시작: <ret> 네, 물론입니다. 에비스에서 소형차를 하루에 50달러에 이용할 수 있으며, 총 100달러입니다.
   141.15s  user  발화 끝
   147.42s  user  발화 시작: 좋아. 예약해 줘.
   147.47s  agent 발화 끝
   148.42s  <ret> 발화 (turn27 첫 프레임)
   148.91s  agent 발화 시작: <ret> 예약 중입니다. 에비스 렌터카 예약이 완료되었습니다. 12월 20일부터 22일까지 소형차, 총 1
   149.12s  user  발화 끝
   149.42s  ⚡SPAN 주입 [d'=1.00s / d_lead=1.45s]: (tool result) Rental confirmed. Avis, compact car, December twentieth 
   159.81s  agent 발화 끝
   162.66s  user  발화 시작: 이제 다 됐어. 정말 고마워!
   164.99s  agent 발화 시작: 도와드릴 수 있어서 기쁩니다. 마이애미 여행이 즐겁고, 아름다운 산호초를 직접 볼 기회가 있기를 바랍니다.
   165.10s  user  발화 끝
   171.61s  agent 발화 끝
