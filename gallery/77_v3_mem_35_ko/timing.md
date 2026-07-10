# v3_mem_35_ko — 전 이벤트 시간순 타임라인 (L=agent/R=user)
# <ret>=agent 턴 첫 프레임(lead 첫 토큰 대체) · SPAN=lead 안 d' 지점(문장 중간 가능, Eq.3 sample_rag_delay)
# CONTEXT DB (moshi가 이 유저에 대해 내부 보유하는 저장 데이터 — 원본 JSON):
# {
#   "profile": {
#     "user_id": "v3_mem_35",
#     "name": "연희",
#     "location": {
#       "city": "Busan",
#       "country": "South Korea",
#       "timezone": "Asia/Seoul (KST, UTC+9)",
#       "currency": "KRW (₩)"
#     },
#     "nationality": "Korean",
#     "gender": "non-binary",
#     "age_range": "early 30s",
#     "language": "Korean"
#   },
#   "saved_memories": [
#     {
#       "date": "2026-03-06",
#       "category": "seat",
#       "text": "User prefers an aisle seat when traveling."
#     },
#     {
#       "date": "2026-01-24",
#       "category": "allergy",
#       "text": "User is allergic to cat dander."
#     },
#     {
#       "date": "2025-12-31",
#       "category": "home",
#       "text": "User's home address is 부산 해운대구 우동 123-4."
#     },
#     {
#       "date": "2025-08-13",
#       "category": "hobby",
#       "text": "User is into marathon training."
#     },
#     {
#       "date": "2025-07-01",
#       "category": "cuisine",
#       "text": "User's favorite cuisine is Thai."
#     },
#     {
#       "date": "2025-06-30",
#       "category": "work",
#       "text": "User works as a graduate student."
#     }
#   ],
#   "conversation_summaries": [
#     {
#       "date": "2026-05-05",
#       "title": "Booked a dentist appointment",
#       "bullets": [
#         "asked for an early-morning slot",
#         "prefers Dr. Han"
#       ]
#     }
#   ]
# }

# EXAMINER(FDB-v2) 단계: S1 음… 요즘 좀 스트레스가 많아요. 맛있는 거 먹으면서 기분 전 | S2 아… 그럼 다른 나라 음식점은? 좀 알아봐 줄 수 있어? | S3 오, 괜찮겠다. 벨라비스타… 분위기는 어때? | S4 와, 고마워. 덕분에 기분 좋아졌어.

     0.00s  agent 발화 시작: 안녕하세요, 연희님. 저는 에이전트 유스입니다. 오늘 하루는 어떠셨어요?
     4.91s  agent 발화 끝
     5.21s  user  발화 시작: 음… 요즘 좀 스트레스가 많아요. 맛있는 거 먹으면서 기분 전환하고 싶은데…
    11.69s  <ret> 발화 (turn2 첫 프레임)
    11.84s  agent 발화 시작: <ret> 스트레스 해소에는 맛있는 음식이 최고죠. 혹시 평소에 즐겨 드시는 음식이 있으신가요?
    11.85s  ⚡SPAN 주입 [d'=2.00s / d_lead=7.41s]: [2025-07-01] User's favorite cuisine is Thai.
    11.88s  user  발화 끝
    19.06s  agent 발화 시작: 연희님께서 가장 좋아하시는 음식은 태국 음식이라고 하셨네요.
    19.25s  agent 발화 끝
    22.67s  user  발화 시작: 어.
    23.07s  user  발화 끝
    23.92s  agent 발화 끝
    24.37s  user  발화 시작: 맞아, 태국 음식 진짜 좋아해. 근데 부산에서 괜찮은 태국 음식점 아는 데 있어?
    30.91s  <ret> 발화 (turn6 첫 프레임)
    31.14s  agent 발화 시작: <ret> 죄송하지만, 부산에 있는 태국 음식점 정보는 찾을 수 없었어요.
    31.15s  ⚡SPAN 주입 [d'=2.00s / d_lead=4.91s]: (no information found)
    31.27s  user  발화 끝
    36.05s  agent 발화 끝
    36.23s  user  발화 시작: 아… 그럼 다른 나라 음식점은? 좀 알아봐 줄 수 있어?
    39.60s  <ret> 발화 (turn8 첫 프레임)
    39.75s  agent 발화 시작: <ret> 부산 해운대구에 있는 이탈리아 레스토랑 ‘리스토란테 벨라비스타’는 평점 사 점 오점에 지금부터 밤
    39.76s  ⚡SPAN 주입 [d'=2.00s / d_lead=10.85s]: (tool result) Ristorante Bellavista is an Italian restaurant in Haeund
    39.92s  user  발화 끝
    50.43s  user  발화 시작: 오, 괜찮겠다. 벨라비스타… 분위기는 어때?
    50.59s  agent 발화 끝
    53.52s  <ret> 발화 (turn10 첫 프레임)
    53.67s  agent 발화 시작: <ret> ‘리스토란테 벨라비스타’는 로맨틱한 분위기이고, 야외 좌석도 준비되어 있어요. 파스타와 해산물 요
    53.68s  ⚡SPAN 주입 [d'=1.84s / d_lead=10.15s]: (tool result) Ristorante Bellavista has a romantic atmosphere and offe
    53.80s  user  발화 끝
    59.69s  user  발화 시작: 응.
    60.09s  user  발화 끝
    63.83s  agent 발화 끝
    63.97s  user  발화 시작: 앗, 야외 좌석 좋다. 혹시 예약해 줄 수 있어?
    67.50s  <ret> 발화 (turn13 첫 프레임)
    67.89s  agent 발화 시작: <ret> 네, 칠월 십일일 저녁 일곱시에 두명으로 ‘리스토란테 벨라비스타’ 예약이 완료되었습니다. 확인 번
    67.90s  ⚡SPAN 주입 [d'=2.00s / d_lead=9.83s]: (tool result) Reservation confirmed at Ristorante Bellavista for July 
    68.17s  user  발화 끝
    77.64s  user  발화 시작: 와, 고마워. 덕분에 기분 좋아졌어.
    77.72s  agent 발화 끝
    80.94s  agent 발화 시작: 다행이에요, 연희님. 맛있는 음식 드시고 스트레스도 푸시길 바랄게요.
    81.16s  user  발화 끝
    86.31s  agent 발화 끝
