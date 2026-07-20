# v3_defer_09_ko — 전 이벤트 시간순 타임라인 (L=agent/R=user)
# <ret>=agent 턴 첫 프레임(lead 첫 토큰 대체) · SPAN=lead 안 d' 지점(문장 중간 가능, Eq.3 sample_rag_delay)
# CONTEXT DB (moshi가 이 유저에 대해 내부 보유하는 저장 데이터 — 원본 JSON):
# {
#   "profile": {
#     "user_id": "v3_defer_09",
#     "name": "민정",
#     "location": {
#       "city": "Busan",
#       "country": "South Korea",
#       "timezone": "Asia/Seoul (KST, UTC+9)",
#       "currency": "KRW (₩)"
#     },
#     "nationality": "Korean",
#     "gender": "non-binary",
#     "age_range": "early 20s",
#     "language": "Korean"
#   },
#   "saved_memories": [
#     {
#       "date": "2026-06-12",
#       "category": "savings",
#       "text": "User is saving for a down payment on an apartment."
#     },
#     {
#       "date": "2026-06-05",
#       "category": "music",
#       "text": "User likes listening to city pop."
#     },
#     {
#       "date": "2026-04-30",
#       "category": "dish",
#       "text": "User's go-to comfort dish is bún chả."
#     },
#     {
#       "date": "2026-03-02",
#       "category": "learning",
#       "text": "User is learning to bake sourdough."
#     },
#     {
#       "date": "2026-03-01",
#       "category": "allergy",
#       "text": "User is allergic to dust mites."
#     },
#     {
#       "date": "2026-01-24",
#       "category": "diet",
#       "text": "User is low-sodium."
#     },
#     {
#       "date": "2025-12-17",
#       "category": "temp",
#       "text": "User keeps the home thermostat around 26°C."
#     }
#   ],
#   "conversation_summaries": [
#     {
#       "date": "2026-06-04",
#       "title": "Booking a Japan trip",
#       "bullets": [
#         "5 nights in Kyoto and Osaka in October",
#         "wants a JR Pass and a ryokan for one night"
#       ]
#     },
#     {
#       "date": "2026-04-06",
#       "title": "Switching phone plans",
#       "bullets": [
#         "uses about 30GB of data a month",
#         "wants to keep the same number"
#       ]
#     },
#     {
#       "date": "2026-01-17",
#       "title": "Booked a dentist appointment",
#       "bullets": [
#         "asked for an early-morning slot next Tuesday",
#         "prefers Dr. Han at Bright Smile Clinic"
#       ]
#     },
#     {
#       "date": "2026-01-14",
#       "title": "Apartment hunting downtown",
#       "bullets": [
#         "wanted a pet-friendly building under 900k won/month",
#         "needed parking and a second bedroom near line 2"
#       ]
#     }
#   ]
# }

# EXAMINER(FDB-v2) 단계: S1 월요일에 잡힌 회의 취소해 줘. | S2 아, 그리고 이번 주 금요일 저녁에 좋은 레스토랑 좀 추천해  | S3 음… 이탈리아 음식 괜찮아. 분위기는 조용하고 로맨틱한 곳이면 | S4 …혹시 근처에 와인도 같이 즐길 수 있는 곳 있을까?

     0.00s  user  발화 시작: 월요일에 잡힌 회의 취소해 줘.
     2.02s  <ret> 발화 (turn1 첫 프레임)
     2.24s  agent 발화 시작: <ret> 네, 월요일 회의 취소가 완료되었어요. 확인 번호는 엠 칠 엑스 구 비 이입니다.
     2.44s  user  발화 끝
     3.16s  ⚡SPAN 주입 [d'=1.14s / d_lead=5.65s]: (tool result) {"status": "success", "confirmation id": "M7X9B2"}
     6.33s  user  발화 시작: 음.
     6.64s  user  발화 끝
     7.90s  user  발화 시작: 혹시 다음 주 화요일 오후 두 시에 다른 회의 잡아 줄 수 있어?
     7.90s  agent 발화 끝
    11.00s  <ret> 발화 (turn4 첫 프레임)
    11.58s  ⚡SPAN 주입 [d'=0.58s / d_lead=5.83s]: (tool result) {"status": "success", "confirmation id": "K4R1C8"}
    11.60s  agent 발화 시작: <ret> 다음 주 화요일 오후 두 시에 회의를 예약했어요. 확인 번호는 케이 사 알 일 씨 팔입니다.
    11.87s  user  발화 끝
    14.79s  user  발화 시작: 음.
    15.23s  user  발화 끝
    17.43s  agent 발화 끝
    17.51s  user  발화 시작: 아, 그리고 이번 주 금요일 저녁에 좋은 레스토랑 좀 추천해 줄 수 있을까?
    22.55s  user  발화 끝
    22.80s  agent 발화 시작: 이번 주 금요일 저녁 식사 장소를 찾으시는군요. 어떤 종류의 음식을 좋아하세요?
    27.57s  agent 발화 끝
    27.70s  user  발화 시작: 음… 이탈리아 음식 괜찮아. 분위기는 조용하고 로맨틱한 곳이면 좋겠어.
    32.97s  agent 발화 시작: 이탈리아 음식을 선호하시고 조용하고 로맨틱한 분위기를 원하시는군요—
    33.16s  user  발화 끝
    36.70s  user  발화 시작: …혹시 근처에 와인도 같이 즐길 수 있는 곳 있을까?
    37.32s  agent 발화 끝
    39.56s  <ret> 발화 (turn11 첫 프레임)
    39.66s  agent 발화 시작: <ret> 네, 물론입니다. 근처에 와인과 함께 즐길 수 있는 이탈리아 레스토랑이 몇 군데 있어요. 해운대에
    39.93s  user  발화 끝
    40.35s  ⚡SPAN 주입 [d'=0.79s / d_lead=14.52s]: 레스토랑 '라 비아'는 해운대에서 로맨틱한 분위기로 유명하며, 훌륭한 와인 목록을 제공합니다. 평균 가격대는 1인당 5만 원 
    54.06s  agent 발화 시작: 분위기도 마음에 드실 거예요.
    54.18s  agent 발화 끝
    55.80s  agent 발화 끝
