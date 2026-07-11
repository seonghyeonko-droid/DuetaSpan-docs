# v3_defer_09_ko — 전 이벤트 시간순 타임라인 (L=agent/R=user)
# <ret>=agent 턴 첫 프레임(lead 첫 토큰 대체) · SPAN=lead 안 d' 지점(문장 중간 가능, Eq.3 sample_rag_delay)
# CONTEXT DB (moshi가 이 유저에 대해 내부 보유하는 저장 데이터 — 원본 JSON):
# {
#   "profile": {
#     "user_id": "v3_defer_09",
#     "name": "가린",
#     "location": {
#       "city": "Seoul",
#       "country": "South Korea",
#       "timezone": "Asia/Seoul (KST, UTC+9)",
#       "currency": "KRW (₩)"
#     },
#     "nationality": "Korean",
#     "gender": "male",
#     "age_range": "40s",
#     "language": "Korean"
#   },
#   "saved_memories": [
#     {
#       "date": "2026-06-11",
#       "category": "hobby",
#       "text": "User is into alpine wildflower photography."
#     },
#     {
#       "date": "2026-03-08",
#       "category": "pet",
#       "text": "User has a Beagle named Rusty."
#     },
#     {
#       "date": "2026-01-28",
#       "category": "home",
#       "text": "User's home address is 부산 해운대구 해운대로 570."
#     },
#     {
#       "date": "2025-08-30",
#       "category": "allergy",
#       "text": "User is allergic to pollen."
#     },
#     {
#       "date": "2025-08-04",
#       "category": "diet",
#       "text": "User is lactose-intolerant."
#     }
#   ],
#   "conversation_summaries": [
#     {
#       "date": "2026-02-14",
#       "title": "Booked a dentist appointment",
#       "bullets": [
#         "asked for an early-morning slot",
#         "prefers Dr. Han"
#       ]
#     },
#     {
#       "date": "2025-10-28",
#       "title": "Planning a birthday dinner",
#       "bullets": [
#         "party of six",
#         "looking for outdoor seating"
#       ]
#     }
#   ]
# }

# EXAMINER(FDB-v2) 단계: S1 중요한 데이터라는 이름의 파일에 재빠른 갈색 여우가 게으른 개 | S2 아, 십퍼센트밖에 안 되네. 그럼 그날 저녁에 맛있는 식당 좀 | S3 …그냥 한식 뷔페는 없어? | S4 응, 나름대로 준비는 했는데… 그래도 자꾸 불안해.

     0.00s  user  발화 시작: 중요한 데이터라는 이름의 파일에 재빠른 갈색 여우가 게으른 개를 뛰어넘는다는 문장으로 파일을 만들어 줄래?
     7.00s  user  발화 끝
     7.22s  <ret> 발화 (turn1 첫 프레임)
     7.38s  agent 발화 시작: <ret> 중요한 데이터 파일이 성공적으로 만들어졌습니다. 혹시 다른 파일도 만들어 드릴까요?
     7.38s  ⚡SPAN 주입 [d'=1.44s / d_lead=5.19s]: (tool result) File 'important data' created successfully.
    12.57s  agent 발화 끝
    12.68s  user  발화 시작: 아니, 됐어. 이번 주 토요일에 서울 날씨 어때?
    15.48s  <ret> 발화 (turn3 첫 프레임)
    15.80s  agent 발화 시작: <ret> 이번 주 토요일 서울 날씨는 섭씨 이십팔 점 오도, 습도 육십팔퍼센트, 풍속은 시속 삼 점 이킬로
    15.80s  ⚡SPAN 주입 [d'=2.00s / d_lead=8.76s]: (tool result) 2026-07-11, Seoul: 28.5°C, humidity 68%, wind 3.2 km/h, 
    16.00s  user  발화 끝
    19.07s  user  발화 시작: 오.
    19.57s  user  발화 끝
    24.56s  agent 발화 끝
    25.00s  user  발화 시작: 맑은 날씨 좋네. 그럼, 다음 주 화요일에는?
    27.94s  <ret> 발화 (turn6 첫 프레임)
    28.33s  agent 발화 시작: <ret> 다음 주 화요일 서울 날씨는 섭씨 삼십일 점 이도, 습도 칠십이퍼센트, 풍속은 시속 사 점 팔킬로
    28.34s  ⚡SPAN 주입 [d'=2.00s / d_lead=8.16s]: (tool result) 2026-07-14, Seoul: 31.2°C, humidity 72%, wind 4.8 km/h, 
    28.55s  user  발화 끝
    36.45s  user  발화 시작: 음, 그럼 그날 혹시 비 올 가능성은 얼마나 돼?
    36.49s  agent 발화 끝
    39.66s  <ret> 발화 (turn8 첫 프레임)
    39.81s  agent 발화 시작: <ret> 다음 주 화요일 서울에는 구름이 조금 끼고, 비가 올 확률은 십퍼센트 정도입니다.
    39.81s  ⚡SPAN 주입 [d'=1.20s / d_lead=5.00s]: (tool result) 2026-07-14, Seoul: 31.2°C, humidity 72%, wind 4.8 km/h, 
    39.96s  user  발화 끝
    41.35s  user  발화 시작: 맞아.
    41.81s  user  발화 끝
    44.81s  agent 발화 끝
    45.36s  user  발화 시작: 아, 십퍼센트밖에 안 되네. 그럼 그날 저녁에 맛있는 식당 좀 찾아줄래?
    50.24s  <ret> 발화 (turn11 첫 프레임)
    50.48s  agent 발화 시작: <ret> 다음 주 화요일 저녁에 서울에서 맛집 다섯곳을 찾았습니다. 가온, 정식, 민글스, 발우공양, 하동
    50.48s  ⚡SPAN 주입 [d'=2.00s / d_lead=7.41s]: (tool result) Found 5 restaurants: Gaon (Korean, $$$), Jungsik (Modern
    50.54s  user  발화 끝
    54.33s  user  발화 시작: 응.
    54.69s  user  발화 끝
    57.67s  user  발화 시작: 가온이 제일 비싼 곳 같네. 가격대는 어느 정도야?
    57.89s  agent 발화 끝
    60.98s  agent 발화 시작: 가온은 고급 한정식 전문점이고, 가격대가 상당히 높은 편입니다.
    61.10s  user  발화 끝
    65.66s  agent 발화 끝
    66.02s  user  발화 시작: 잠깐만, 가온 말고 다른 데 좀 찾아줘 봐 — 좀 더 저렴한 곳으로.
    70.12s  agent 발화 시작: 물론입니다 —
    70.17s  user  발화 끝
    70.31s  user  발화 시작: …그냥 한식 뷔페는 없어?
    70.85s  agent 발화 끝
    71.55s  <ret> 발화 (turn18 첫 프레임)
    71.95s  agent 발화 시작: <ret> 서울에서 한식 뷔페 세곳을 찾았습니다. 한일관, 서울 가든, 요거프레소입니다. 이 중에서 어느 곳
    71.95s  ⚡SPAN 주입 [d'=2.00s / d_lead=7.60s]: (tool result) Found 3 Korean buffets: Han Il Kwan, Seoul Garden, Yoger
    72.06s  user  발화 끝
    75.24s  user  발화 시작: 와.
    75.87s  user  발화 끝
    79.55s  agent 발화 끝
    79.59s  agent 발화 시작: 요거프레소는 뷔페식 식당은 아니지만, 다양한 한식 메뉴를 판매하고 있습니다.
    84.56s  user  발화 시작: 아, 그럼 그냥 서울 가든으로 예약해 줘. 저녁 일곱시에 두 명이서.
    84.59s  agent 발화 끝
    89.17s  <ret> 발화 (turn22 첫 프레임)
    89.57s  agent 발화 시작: <ret> 서울 가든 저녁 일곱시에 두명 예약이 완료되었습니다. 확인 코드는 에스 지 칠 팔 구 이입니다.
    89.57s  ⚡SPAN 주입 [d'=2.00s / d_lead=6.72s]: (tool result) Reservation confirmed at Seoul Garden for 2 people on 20
    89.70s  user  발화 끝
    93.31s  user  발화 시작: 오.
    93.94s  user  발화 끝
    96.29s  agent 발화 끝
    96.63s  user  발화 시작: 고마워. 이번 주 금요일에 중요한 발표가 있는데, 긴장돼.
   101.09s  agent 발화 시작: 중요한 발표를 앞두고 긴장되시는군요. 발표 준비는 잘 되어가시나요?
   101.25s  user  발화 끝
   105.11s  agent 발화 끝
   105.46s  user  발화 시작: 응, 나름대로 준비는 했는데… 그래도 자꾸 불안해.
   109.57s  user  발화 끝
   109.94s  agent 발화 시작: 불안한 마음은 당연합니다. 발표 전에 심호흡을 하고, 긍정적인 생각을 해 보세요.
   114.80s  agent 발화 끝
   115.18s  user  발화 시작: 좋은 조언 고마워. 혹시 발표 잘 하는 팁 같은 거 있어?
   119.00s  agent 발화 시작: 자신감을 갖고 또렷하게 말하는 것이 중요합니다. 청중과 눈을 마주치고, 목소리를 크게 내세요.
   119.20s  user  발화 끝
   121.87s  user  발화 시작: 응.
   122.17s  user  발화 끝
   125.12s  agent 발화 끝
   125.95s  user  발화 시작: 알았어. 연습 많이 해야겠다.
   128.00s  agent 발화 시작: 네, 충분히 연습하시면 좋은 결과가 있을 겁니다.
   128.20s  user  발화 끝
   130.86s  agent 발화 끝
