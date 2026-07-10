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

# EXAMINER(FDB-v2) 단계: S1 그랜드뷰 로프트에 육월 십오일에 방문 예약을 잡아줘. | S2 칼국수 좋아하지. 근데… 그 이탈리아 식당, 평점 좀 알려줄  | S3 아, 맞아. 근데 혹시 지금 날씨 어때? | S4 알았어. 고마워.

     0.00s  user  발화 시작: 그랜드뷰 로프트에 육월 십오일에 방문 예약을 잡아줘.
     3.62s  <ret> 발화 (turn1 첫 프레임)
     3.70s  user  발화 끝
     3.85s  agent 발화 시작: <ret> 그랜드뷰 로프트 방문 예약을 육월 십오일 오후 두시에 잡아드렸어요. 확인 번호는 GH789KL입니
     5.62s  ⚡SPAN 주입 [d'=2.00s / d_lead=10.52s]: (tool result) Visit scheduled for The Grandview Lofts on June 15th, 20
    14.38s  agent 발화 끝
    14.78s  user  발화 시작: 아니, 괜찮아. 근데 그 근처에 맛집 좀 알려줘.
    17.63s  <ret> 발화 (turn3 첫 프레임)
    17.94s  agent 발화 시작: <ret> 그랜드뷰 로프트 근처에 매콤한 칼국수집이 오백미터, 이탈리아 식당이 팔백미터, 카페 블룸이 천이백
    18.01s  user  발화 끝
    19.63s  ⚡SPAN 주입 [d'=2.00s / d_lead=10.76s]: (tool result) Seoul, (37.5665, 126.9780), The Spicy Noodle (500m), Ita
    28.68s  user  발화 시작: 칼국수 좋아하지. 근데… 그 이탈리아 식당, 평점 좀 알려줄 수 있어?
    28.70s  agent 발화 끝
    33.87s  <ret> 발화 (turn5 첫 프레임)
    34.02s  agent 발화 시작: <ret> 이탈리아 식당은 별점 사 점 오점에 리뷰가 백이십개, 가격대는 조금 높은 편이에요. 괜찮으시겠어요
    34.19s  user  발화 끝
    35.15s  ⚡SPAN 주입 [d'=1.28s / d_lead=7.18s]: (tool result) Italian Place, 4.5 stars, 120 reviews, price range $$$.
    41.20s  agent 발화 끝
    41.40s  user  발화 시작: 응, 괜찮아. 근데… 잠깐만, 칼국수집 이름이 뭐였지?
    45.48s  agent 발화 시작: 매콤한 칼국수집이었어요. 오백미터 거리에 있습니다. 기억이 잘 안 나시면 다시 한번 알려드릴게요.
    45.61s  user  발화 끝
    51.46s  agent 발화 끝
    52.25s  user  발화 시작: 아, 맞아. 근데 혹시 지금 날씨 어때?
    56.52s  <ret> 발화 (turn9 첫 프레임)
    56.59s  agent 발화 시작: <ret> 지금 서울은 기온이 이십팔도, 습도는 육십오%, 바람은 시속 삼 점 이킬로미터로 불고 있어요. 날
    56.78s  user  발화 끝
    58.52s  ⚡SPAN 주입 [d'=2.00s / d_lead=8.76s]: (tool result) 28.0°C, humidity 65%, wind 3.2 km/h.
    62.34s  user  발화 시작: 어.
    62.65s  user  발화 끝
    65.16s  user  발화 시작: 흐음… 더위 조심해야겠다. 근데, 혹시 내일 모레 날씨도 알려줄 수 있어?
    65.36s  agent 발화 끝
    69.52s  <ret> 발화 (turn12 첫 프레임)
    69.60s  agent 발화 시작: <ret> 내일 모레 서울은 기온이 삼십도, 습도는 칠십%, 바람은 시속 사 점 팔킬로미터로 불고 비가 올 
    69.74s  user  발화 끝
    70.96s  ⚡SPAN 주입 [d'=1.44s / d_lead=10.01s]: (tool result) 30.0°C, humidity 70%, wind 4.8 km/h, chance of rain 20%.
    79.61s  agent 발화 끝
    81.52s  user  발화 시작: 알았어. 고마워.
    82.94s  user  발화 끝
    83.35s  agent 발화 시작: 도움이 되었다니 기쁘네요.
    84.94s  user  발화 시작: 아니, 괜찮아.
    85.14s  agent 발화 끝
    85.76s  user  발화 끝
    86.06s  agent 발화 시작: 그럼 즐거운 하루 보내세요.
    87.99s  agent 발화 끝
