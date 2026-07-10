# v3_selfc_07_ko — 전 이벤트 시간순 타임라인 (L=agent/R=user)
# <ret>=agent 턴 첫 프레임(lead 첫 토큰 대체) · SPAN=lead 안 d' 지점(문장 중간 가능, Eq.3 sample_rag_delay)
# CONTEXT DB (moshi가 이 유저에 대해 내부 보유하는 저장 데이터 — 원본 JSON):
# {
#   "profile": {
#     "user_id": "v3_selfc_07",
#     "name": "윤율",
#     "location": {
#       "city": "Seoul",
#       "country": "South Korea",
#       "timezone": "Asia/Seoul (KST, UTC+9)",
#       "currency": "KRW (₩)"
#     },
#     "nationality": "Korean",
#     "gender": "female",
#     "age_range": "early 30s",
#     "language": "Korean"
#   },
#   "saved_memories": [
#     {
#       "date": "2026-06-05",
#       "category": "seat",
#       "text": "User prefers a window seat when traveling."
#     },
#     {
#       "date": "2026-05-29",
#       "category": "home",
#       "text": "User's home address is 경기 성남시 분당구 판교로 235."
#     },
#     {
#       "date": "2026-05-01",
#       "category": "allergy",
#       "text": "User is allergic to peanuts."
#     },
#     {
#       "date": "2026-04-27",
#       "category": "pet",
#       "text": "User has a Siamese cat named Bella."
#     },
#     {
#       "date": "2026-01-21",
#       "category": "cuisine",
#       "text": "User's favorite cuisine is Italian."
#     },
#     {
#       "date": "2025-10-16",
#       "category": "trip",
#       "text": "User is planning a trip to Iceland in October."
#     }
#   ],
#   "conversation_summaries": [
#     {
#       "date": "2026-04-15",
#       "title": "Planning a birthday dinner",
#       "bullets": [
#         "party of six",
#         "looking for outdoor seating"
#       ]
#     },
#     {
#       "date": "2026-03-07",
#       "title": "Setting up a home network",
#       "bullets": [
#         "asked about mesh routers",
#         "coverage for a 3-story house"
#       ]
#     },
#     {
#       "date": "2025-08-24",
#       "title": "Researching a used car",
#       "bullets": [
#         "comparing hybrid models",
#         "wants under 30k miles"
#       ]
#     }
#   ]
# }

# EXAMINER(FDB-v2) 단계: S1 그랜드뷰 로프트에 육월 십오일에 방문 예약을 잡아줘. | S2 오만원… 음… 조금 부담스럽네. 좀 더 저렴한 곳은 없을까? | S3 그래, 도보로 알려줘. | S4 인사이드 아웃 이는 평점이 어때?

     0.00s  user  발화 시작: 그랜드뷰 로프트에 육월 십오일에 방문 예약을 잡아줘.
     3.42s  user  발화 끝
     3.47s  <ret> 발화 (turn1 첫 프레임)
     3.70s  agent 발화 시작: <ret> 그랜드뷰 로프트 육월 십오일 오후 두시부터 세시까지 방문 예약이 확정되었습니다. 예약 번호는 vi
     5.47s  ⚡SPAN 주입 [d'=2.00s / d_lead=11.27s]: (tool result) The Grandview Lofts, 2026-06-15, 14:00-15:00, confirmed,
    14.97s  agent 발화 끝
    15.57s  user  발화 시작: 아니, 괜찮아. 근데 그 근처에 맛있는 식당 있으면 추천해 줄 수 있어?
    19.56s  <ret> 발화 (turn3 첫 프레임)
    19.88s  agent 발화 시작: <ret> 그랜드뷰 로프트 근처에 한강뷰 한식당이 이백삼십미터 거리에 있고, 벨라 이탈리아라는 이탈리아 식당
    20.06s  user  발화 끝
    21.56s  ⚡SPAN 주입 [d'=2.00s / d_lead=10.90s]: (tool result) Seoul, Korean, 4.5 stars, $$$, Han River View Restaurant
    30.77s  agent 발화 끝
    30.78s  user  발화 시작: 한식당이 좋겠어. 가격대는 어느 정도야?
    33.35s  user  발화 끝
    33.54s  agent 발화 시작: 한식당은 가격대가 조금 높은 편이에요. 한 상차림에 오만원 정도 생각하시면 될 것 같아요.
    39.89s  agent 발화 끝
    40.25s  user  발화 시작: 오만원… 음… 조금 부담스럽네. 좀 더 저렴한 곳은 없을까?
    43.81s  <ret> 발화 (turn7 첫 프레임)
    44.04s  agent 발화 시작: <ret> 조금 더 저렴한 곳으로는 김스 키친이 사백오십미터 거리에 있고, 드래곤 팰리스라는 중국집은 오백팔
    44.09s  user  발화 끝
    45.09s  ⚡SPAN 주입 [d'=1.28s / d_lead=10.67s]: (tool result) Seoul, Korean, 4.0 stars, $$, Kim's Kitchen (450 m), Chi
    54.71s  agent 발화 끝
    55.55s  user  발화 시작: 김스 키친으로 가볼까. 가는 길 좀 알려줘.
    57.88s  <ret> 발화 (turn9 첫 프레임)
    57.90s  user  발화 끝
    57.95s  agent 발화 시작: <ret> 김스 키친까지 걸어가면 칠분, 버스를 타면 십이분, 택시를 타면 사분 정도 걸립니다. 도보로 가는
    59.24s  ⚡SPAN 주입 [d'=1.36s / d_lead=10.16s]: (tool result) Walking: 7 min (450 m), Bus: 12 min (600 m), Taxi: 4 min
    64.66s  user  발화 시작: 어.
    64.97s  user  발화 끝
    68.11s  agent 발화 끝
    69.46s  user  발화 시작: 그래, 도보로 알려줘.
    70.57s  <ret> 발화 (turn12 첫 프레임)
    70.84s  user  발화 끝
    70.88s  agent 발화 시작: <ret> 그랜드뷰 로드를 북쪽으로 쭉 가세요. 메이플 스트리트에서 좌회전하고, 오크 에비뉴에서 우회전하면 
    72.57s  ⚡SPAN 주입 [d'=2.00s / d_lead=8.62s]: (tool result) Head north on Grandview Rd, turn left onto Maple St, tur
    79.51s  agent 발화 끝
    80.08s  user  발화 시작: 고마워. 그런데, 혹시 오늘 날씨는 어때?
    83.20s  <ret> 발화 (turn14 첫 프레임)
    83.32s  user  발화 끝
    83.43s  agent 발화 시작: <ret> 서울은 현재 이십팔도이고, 습도는 육십오%, 바람은 시속 삼 점 이킬로미터입니다. 구름이 조금 있
    85.20s  ⚡SPAN 주입 [d'=2.00s / d_lead=7.37s]: (tool result) 28.0°C, humidity 65%, wind 3.2 km/h, partly cloudy.
    90.80s  agent 발화 끝
    92.65s  user  발화 시작: 아, 그렇구나. 그럼… 오늘 저녁에 영화 볼만한 거 있어?
    95.90s  <ret> 발화 (turn16 첫 프레임)
    96.05s  agent 발화 시작: <ret> 서울에서 오늘 저녁에는 인사이드 아웃 이 배드 보이즈 라이드 오어 다이, 가필드 무비가 상영됩니다
    96.21s  user  발화 끝
    97.90s  ⚡SPAN 주입 [d'=2.00s / d_lead=11.83s]: (tool result) "Inside Out 2" (19:00, 21:30), "Bad Boys: Ride or Die" (
   101.12s  user  발화 시작: 음.
   101.62s  user  발화 끝
   107.83s  user  발화 시작: 인사이드 아웃 이는 평점이 어때?
   107.87s  agent 발화 끝
   109.79s  <ret> 발화 (turn19 첫 프레임)
   110.03s  agent 발화 시작: <ret> 인사이드 아웃 이는 주요 영화 리뷰 사이트에서 평균 팔 점 오점 만점을 받았어요. 평이 아주 좋네
   110.23s  user  발화 끝
   111.79s  ⚡SPAN 주입 [d'=2.00s / d_lead=7.64s]: (tool result) "Inside Out 2" received an average rating of 8.5/10 on m
   115.52s  user  발화 시작: 응.
   115.73s  user  발화 끝
   117.67s  agent 발화 끝
   117.70s  user  발화 시작: 팔 점 오점… 괜찮네. 그럼 일곱시 타임으로 예매해줘.
   121.63s  <ret> 발화 (turn22 첫 프레임)
   121.87s  user  발화 끝
   122.03s  agent 발화 시작: <ret> 인사이드 아웃 이 오늘 저녁 일곱시
   123.23s  ⚡SPAN 주입 [d'=1.60s / d_lead=2.91s]: (tool result) 2 adult tickets for "Inside Out 2" at 19:00 in Seoul, co
   124.94s  agent 발화 끝
