# v3_rag_27_ko — 전 이벤트 시간순 타임라인 (L=agent/R=user)
# <ret>=agent 턴 첫 프레임(lead 첫 토큰 대체) · SPAN=lead 안 d' 지점(문장 중간 가능, Eq.3 sample_rag_delay)
# CONTEXT DB (moshi가 이 유저에 대해 내부 보유하는 저장 데이터 — 원본 JSON):
# {
#   "profile": {
#     "user_id": "v3_rag_27",
#     "name": "준훈",
#     "location": {
#       "city": "Busan",
#       "country": "South Korea",
#       "timezone": "Asia/Seoul (KST, UTC+9)",
#       "currency": "KRW (₩)"
#     },
#     "nationality": "Korean",
#     "gender": "male",
#     "age_range": "late 30s",
#     "language": "Korean"
#   },
#   "saved_memories": [
#     {
#       "date": "2026-06-17",
#       "category": "pet",
#       "text": "User has a Siamese cat named Bella."
#     },
#     {
#       "date": "2026-05-25",
#       "category": "seat",
#       "text": "User prefers an aisle seat when traveling."
#     },
#     {
#       "date": "2026-04-08",
#       "category": "cuisine",
#       "text": "User's favorite cuisine is Mexican."
#     },
#     {
#       "date": "2025-12-21",
#       "category": "diet",
#       "text": "User is gluten-free."
#     },
#     {
#       "date": "2025-12-10",
#       "category": "work",
#       "text": "User works as a chef."
#     }
#   ],
#   "conversation_summaries": [
#     {
#       "date": "2026-06-09",
#       "title": "Setting up a home network",
#       "bullets": [
#         "asked about mesh routers",
#         "coverage for a 3-story house"
#       ]
#     }
#   ]
# }

# EXAMINER(FDB-v2) 단계: S1 오늘 날씨 어때? | S2 아, '뉴욕 타임스'에서 그렇게 평가했구나. | S3 마를론 브란도 영화 또 추천해 줄래? | S4 '가온'이 더 평점이 높네. 예약은 어떻게 해야 돼?

     0.00s  user  발화 시작: 오늘 날씨 어때?
     1.41s  <ret> 발화 (turn1 첫 프레임)
     1.47s  agent 발화 시작: <ret> 오늘 날씨는 이십삼도이고, 습도는 칠십사퍼센트, 바람은 시속 오 점 오킬로미터로 흐리고 있어요. 
     1.47s  user  발화 끝
     2.31s  ⚡SPAN 주입 [d'=0.90s / d_lead=7.35s]: (tool result) {"temperature": 23.0, "humidity": 74, "wind speed": 5.5,
     8.82s  user  발화 시작: 그럼, 이번 주말에 영화 볼 만한 거 있어?
     8.82s  agent 발화 끝
    12.74s  agent 발화 시작: 이번 주말에 영화를 보고 싶으시군요. 어떤 장르를 좋아하세요?
    12.74s  user  발화 끝
    16.66s  user  발화 시작: 음… 잔디밭에서의 키스 봤어?
    16.66s  agent 발화 끝
    18.23s  <ret> 발화 (turn5 첫 프레임)
    18.62s  agent 발화 시작: <ret> '잔디밭에서의 키스'는 천구백육십일년에 엘리아 카잔 감독이 연출하고, 나탈리 우드와 워렌 비티가 
    18.62s  user  발화 끝
    18.85s  ⚡SPAN 주입 [d'=0.62s / d_lead=7.84s]: Splendor in the Grass was a 1961 American romantic drama film written 
    26.46s  user  발화 시작: 와.
    26.46s  agent 발화 끝
    26.95s  user  발화 시작: 엘리아 카잔은 누구야?
    26.95s  user  발화 끝
    27.96s  <ret> 발화 (turn8 첫 프레임)
    28.26s  ⚡SPAN 주입 [d'=0.31s / d_lead=10.78s]: Elia Kazan was a Greek-American film and stage director, described as 
    28.42s  agent 발화 시작: <ret> 엘리아 카잔은 '뉴욕 타임스'에서 "브로드웨이와 할리우드 역사상 가장 존경받고 영향력 있는 감독 
    28.42s  user  발화 끝
    39.20s  user  발화 시작: 아, '뉴욕 타임스'에서 그렇게 평가했구나.
    39.20s  agent 발화 끝
    41.65s  agent 발화 시작: 네, 맞아요. '뉴욕 타임스'에서 그렇게 평가했어요.
    41.65s  user  발화 끝
    44.59s  user  발화 시작: 그 감독 다른 영화도 있어?
    44.59s  agent 발화 끝
    47.04s  agent 발화 시작: 카잔 감독은 '온 더 워터프론트'나 '욕망이라는 이름의 전차' 같은 유명한 영화들을 연출했어요.
    47.04s  user  발화 끝
    52.92s  user  발화 시작: '욕망이라는 이름의 전차'도 봤어. 마를론 브란도 나왔었지.
    52.92s  agent 발화 끝
    56.35s  agent 발화 시작: 맞아요, 마를론 브란도가 출연했었죠. 정말 인상적인 연기를 보여줬어요.
    56.35s  user  발화 끝
    60.27s  user  발화 시작: 마를론 브란도 영화 또 추천해 줄래?
    60.27s  agent 발화 끝
    63.21s  agent 발화 시작: 마를론 브란도 영화라면 '석양의 무법자'를 추천해 드리고 싶어요.
    63.21s  user  발화 끝
    67.13s  user  발화 시작: '석양의 무법자'? 그거 재밌어?
    67.13s  agent 발화 끝
    69.03s  <ret> 발화 (turn18 첫 프레임)
    69.09s  agent 발화 시작: <ret> '석양의 무법자'는 말론 브란도, 메리 머피, 리 마빈이 출연한 천구백오십삼년 미국 흑백 오토바이
    69.09s  user  발화 끝
    69.74s  ⚡SPAN 주입 [d'=0.71s / d_lead=6.86s]: The Wild One is a 1953 American black and white motorcycle film starri
    75.95s  user  발화 시작: 오, 고전 영화네.
    75.95s  agent 발화 끝
    77.42s  agent 발화 시작: 네, 고전 영화죠. 하지만 지금 봐도 충분히 재미있을 거예요.
    77.42s  user  발화 끝
    81.83s  user  발화 시작: 응.
    81.83s  agent 발화 끝
    82.32s  user  발화 시작: 혹시 지금 서울에 있는 맛집 알아봐 줄 수 있어?
    82.32s  user  발화 끝
    86.12s  <ret> 발화 (turn23 첫 프레임)
    86.46s  ⚡SPAN 주입 [d'=0.34s / d_lead=8.33s]: (tool result) {"restaurants": [{"name": "Gaon", "cuisine": "Korean", "
    86.73s  agent 발화 시작: <ret> 서울에는 '가온'과 '정식'이라는 맛집이 있어요. '가온'은 한국 요리 전문점이고 평점은 사 점 
    86.73s  user  발화 끝
    95.06s  user  발화 시작: 응.
    95.06s  agent 발화 끝
    95.55s  user  발화 시작: '가온'이 더 평점이 높네. 예약은 어떻게 해야 돼?
    95.55s  user  발화 끝
    99.47s  agent 발화 시작: '가온' 예약은 전화로 하셔야 해요. 전화번호는 공 이 오 사 일 칠 칠 공 공입니다.
    99.47s  user  발화 끝
   106.82s  user  발화 시작: 고마워. 그럼, 내일 아침 일곱시에 알람 맞춰줘.
   106.82s  agent 발화 끝
   110.08s  <ret> 발화 (turn28 첫 프레임)
   110.25s  agent 발화 시작: <ret> 네, 내일 아침 일곱시에 알람을 맞춰 드렸어요. 알람 아이 디는 에이 일 비 이 씨 삼 디 사입니
   110.25s  user  발화 끝
   111.07s  ⚡SPAN 주입 [d'=0.99s / d_lead=9.80s]: (tool result) {"alarm id": "a1b2c3d4", "status": "scheduled"}
   120.05s  user  발화 시작: 진짜?
   120.05s  agent 발화 끝
   120.54s  user  발화 시작: 응, 고마워.
   120.54s  user  발화 끝
   121.52s  agent 발화 시작: 천만에요.
   121.52s  user  발화 끝
   122.01s  agent 발화 끝
