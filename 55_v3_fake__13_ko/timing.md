# v3_fake__13_ko — 전 이벤트 시간순 타임라인 (L=agent/R=user)
# <ret>=agent 턴 첫 프레임(lead 첫 토큰 대체) · SPAN=lead 안 d' 지점(문장 중간 가능, Eq.3 sample_rag_delay)
# CONTEXT DB (moshi가 이 유저에 대해 내부 보유하는 저장 데이터 — 원본 JSON):
# {
#   "profile": {
#     "user_id": "v3_fake__13",
#     "name": "채안",
#     "location": {
#       "city": "Busan",
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
#       "date": "2026-06-12",
#       "category": "diet",
#       "text": "User is gluten-free."
#     },
#     {
#       "date": "2026-06-09",
#       "category": "trip",
#       "text": "User is planning a trip to Vietnam in May."
#     },
#     {
#       "date": "2026-05-18",
#       "category": "cuisine",
#       "text": "User's favorite cuisine is Italian."
#     },
#     {
#       "date": "2026-05-09",
#       "category": "pet",
#       "text": "User has a Corgi named Mochi."
#     },
#     {
#       "date": "2026-03-22",
#       "category": "hobby",
#       "text": "User is into home fermentation."
#     },
#     {
#       "date": "2026-03-04",
#       "category": "allergy",
#       "text": "User is allergic to pollen."
#     }
#   ],
#   "conversation_summaries": [
#     {
#       "date": "2026-02-11",
#       "title": "Apartment hunting downtown",
#       "bullets": [
#         "wanted a pet-friendly building",
#         "budget for 2 bedrooms"
#       ]
#     }
#   ]
# }

# EXAMINER(FDB-v2) 단계: S1 영화 '바람과 함께 사라지다'에서 파 역을 맡은 배우가 누구였 | S2 혹시 서울 근처에 분위기 좋은 카페 알아볼 수 있어? | S3 아, 맞다. 이번 주말에 친구랑 같이 가려고 하는데, 혹시 예 | S4 이번 주말은 정말 기대되네.

     0.00s  user  발화 시작: 영화 '바람과 함께 사라지다'에서 파 역을 맡은 배우가 누구였지?
     3.88s  <ret> 발화 (turn1 첫 프레임)
     4.43s  agent 발화 시작: <ret> 영화 '바람과 함께 사라지다'에서 파 역을 맡은 배우는 토마스 존 미첼이었어요. 천구백삼십구년에 
     4.43s  user  발화 끝
     4.91s  ⚡SPAN 주입 [d'=1.03s / d_lead=6.40s]: Thomas John Mitchell played the role of Pa in the 1939 film Gone with 
    10.83s  user  발화 시작: 대박.
    10.83s  agent 발화 끝
    11.32s  user  발화 시작: 음, 고마워. 요즘 좀 힘든데, 괜찮아질까?
    11.32s  user  발화 끝
    14.28s  agent 발화 시작: 힘든 시간을 보내고 계시는군요. 괜찮아질 거예요. 감정의 파도가 밀려왔다 밀려가는 건 자연스러운 일이에요.
    14.28s  user  발화 끝
    20.68s  user  발화 시작: 어.
    20.68s  agent 발화 끝
    21.17s  user  발화 시작: 네, 그러네요.
    21.17s  user  발화 끝
    22.15s  agent 발화 시작: 주변 사람들에게 기대보는 것도 좋은 방법이에요. 혼자 힘들어하지 마세요.
    22.15s  user  발화 끝
    26.58s  user  발화 시작: 혹시 서울 근처에 분위기 좋은 카페 알아볼 수 있어?
    26.58s  agent 발화 끝
    30.97s  <ret> 발화 (turn10 첫 프레임)
    31.02s  agent 발화 시작: 음.
    31.02s  user  발화 끝
    31.51s  agent 발화 시작: <ret> 서울에는 카페 레이어드와 그린 카페가 평점이 좋고, 가격대는 일만 원에서 이만 원 사이예요.
    31.51s  agent 발화 끝
    32.47s  ⚡SPAN 주입 [d'=1.50s / d_lead=6.40s]: (tool result) Restaurants found: Cafe Layered (4.5 stars, ₩10,000-₩20,
    37.91s  user  발화 시작: 카페 레이어드… 거기 가보고 싶다.
    37.91s  agent 발화 끝
    39.86s  <ret> 발화 (turn12 첫 프레임)
    40.37s  agent 발화 시작: <ret> 카페 레이어드에 가보고 싶으시군요. 디저트가 맛있다고 들었어요.
    40.37s  user  발화 끝
    40.44s  ⚡SPAN 주입(IRRELEVANT) [d'=0.57s / d_lead=3.45s]: The average high temperature in Anchorage, Alaska is 11.5°C.
    43.82s  agent 발화 시작: 카페 레이어드는 사진 찍기에도 예쁜 곳이 많다고 하니, 즐거운 시간 보내실 수 있을 거예요.
    43.82s  agent 발화 끝
    50.71s  user  발화 시작: 어.
    50.71s  agent 발화 끝
    51.20s  user  발화 시작: 아, 맞다. 이번 주말에 친구랑 같이 가려고 하는데, 혹시 예약 가능해?
    51.20s  user  발화 끝
    56.45s  <ret> 발화 (turn16 첫 프레임)
    56.61s  agent 발화 시작: <ret> 네, 카페 레이어드에 이번 주 토요일 두명으로 예약이 완료되었습니다. 확인 번호는 엘 엑스 구 이
    56.61s  user  발화 끝
    57.53s  ⚡SPAN 주입 [d'=1.07s / d_lead=8.37s]: (tool result) Reservation confirmed for Cafe Layered, July 12, 2026, 2
    64.98s  user  발화 시작: 와, 정말 고마워! —
    64.98s  agent 발화 끝
    66.95s  user  발화 시작: …혹시 거기 근처에 맛있는 빵집도 알아봐 줄 수 있어?
    66.95s  user  발화 끝
    71.08s  <ret> 발화 (turn19 첫 프레임)
    71.38s  agent 발화 시작: <ret> 카페 레이어드 근처에는 불랑제리 라 파리지엔과 브레드 래버러토리가 있어요. 평점도 높고 가격대도 
    71.38s  user  발화 끝
    71.56s  ⚡SPAN 주입 [d'=0.47s / d_lead=6.40s]: (tool result) Boulangerie La Parisienne (4.6 stars, ₩5,000-₩10,000), B
    77.78s  user  발화 시작: 어.
    77.78s  agent 발화 끝
    78.28s  agent 발화 시작: 불랑제리 라 파리지엔은 프랑스식 빵이 유명하고, 브레드 래버러토리는 다양한 종류의 빵을 맛볼 수 있다고 해요
    78.28s  user  발화 끝
    85.66s  user  발화 시작: 이번 주말은 정말 기대되네.
    85.66s  agent 발화 끝
    87.63s  agent 발화 시작: 이번 주말이 정말 기대되시는군요. 친구분과 함께 즐거운 시간 보내시길 바랍니다.
    87.63s  user  발화 끝
    92.55s  agent 발화 시작: 힘든 시간을 잘 이겨내고, 또 즐거운 추억을 만들 수 있도록 제가 옆에서 응원할게요.
    92.55s  agent 발화 끝
    98.95s  user  발화 시작: 음.
    98.95s  agent 발화 끝
    99.45s  user  발화 시작: 고마워, 구로. 네 덕분에 좀 힘이 난다.
    99.45s  user  발화 끝
   102.89s  agent 발화 시작: 도움이 되었다니 기쁘네요.
   102.89s  user  발화 끝
   104.37s  agent 발화 끝
