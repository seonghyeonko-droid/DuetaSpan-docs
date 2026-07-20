# v3_mcp_02_ko — 전 이벤트 시간순 타임라인 (L=agent/R=user)
# <ret>=agent 턴 첫 프레임(lead 첫 토큰 대체) · SPAN=lead 안 d' 지점(문장 중간 가능, Eq.3 sample_rag_delay)
# CONTEXT DB (moshi가 이 유저에 대해 내부 보유하는 저장 데이터 — 원본 JSON):
# {
#   "profile": {
#     "user_id": "v3_mcp_02",
#     "name": "진희",
#     "location": {
#       "city": "Seoul",
#       "country": "South Korea",
#       "timezone": "Asia/Seoul (KST, UTC+9)",
#       "currency": "KRW (₩)"
#     },
#     "nationality": "Korean",
#     "gender": "non-binary",
#     "age_range": "mid 30s",
#     "language": "Korean"
#   },
#   "saved_memories": [
#     {
#       "date": "2026-06-08",
#       "category": "dislike",
#       "text": "User can't stand blue cheese."
#     },
#     {
#       "date": "2026-06-07",
#       "category": "wake",
#       "text": "User usually wakes up around 7:30am."
#     },
#     {
#       "date": "2026-05-10",
#       "category": "sibling",
#       "text": "User has a younger sibling named Elena."
#     },
#     {
#       "date": "2026-04-16",
#       "category": "airline",
#       "text": "User usually flies with Singapore Airlines."
#     },
#     {
#       "date": "2026-02-26",
#       "category": "emergency",
#       "text": "User's emergency contact is Elena."
#     },
#     {
#       "date": "2026-02-20",
#       "category": "savings",
#       "text": "User is saving for paying off student loans."
#     },
#     {
#       "date": "2025-12-10",
#       "category": "work",
#       "text": "User works as a civil engineer."
#     }
#   ],
#   "conversation_summaries": [
#     {
#       "date": "2026-05-25",
#       "title": "Studying for the TOEIC",
#       "bullets": [
#         "target score is 850",
#         "exam is in about six weeks"
#       ]
#     },
#     {
#       "date": "2026-05-22",
#       "title": "Fixing a leaking faucet",
#       "bullets": [
#         "it's a single-handle kitchen tap",
#         "asked whether to replace the cartridge"
#       ]
#     },
#     {
#       "date": "2026-01-18",
#       "title": "Choosing a laptop",
#       "bullets": [
#         "budget around 1.8M won",
#         "needs it for video editing and light gaming"
#       ]
#     },
#     {
#       "date": "2026-01-03",
#       "title": "Buying a gift for a parent",
#       "bullets": [
#         "mom's 60th birthday next month",
#         "considering a spa day or a watch"
#       ]
#     }
#   ]
# }

# EXAMINER(FDB-v2) 단계: S1 음, 내일 모레부터 삼박 사일 동안 덴버의 마운틴 로지 호텔  | S2 음… 스테이크가 먹고 싶네요. 고급스러운 곳이면 더 좋고요. | S3 …근데 혹시 거긴 예약이 얼마나 빨리 차나요? 지금 당장 예약 | S4 와, 정말 감사합니다. 덕분에 편하게 여행 계획을 세울 수 있

     0.00s  user  발화 시작: 음, 내일 모레부터 삼박 사일 동안 덴버의 마운틴 로지 호텔 예약 좀 부탁해. 오월 십일부터 시작하는 걸로.
     2.53s  agent 발화 시작: 음.
     2.98s  agent 발화 끝
     6.30s  <ret> 발화 (turn2 첫 프레임)
     6.36s  agent 발화 시작: <ret> 마운틴 로지 호텔, 오월 십일부터 삼박 예약이 완료되었고, 총 금액은 육백칠십이달러입니다. 확인 
     6.49s  user  발화 끝
     7.37s  ⚡SPAN 주입 [d'=1.08s / d_lead=11.97s]: (tool result) {"confirmation id": "MX849Z", "hotel name": "Mountain Lo
    18.33s  agent 발화 끝
    19.86s  user  발화 시작: 오, 좋네요. 근데 혹시 그 호텔 주변에 괜찮은 식당도 있을까요?
    25.45s  agent 발화 시작: 마운틴 로지 호텔 주변에는 다양한 식당들이 있습니다. 어떤 종류의 음식을 좋아하시나요?
    25.46s  user  발화 끝
    30.02s  user  발화 시작: 어.
    30.64s  user  발화 끝
    32.45s  agent 발화 끝
    34.16s  user  발화 시작: 음… 스테이크가 먹고 싶네요. 고급스러운 곳이면 더 좋고요.
    37.53s  <ret> 발화 (turn7 첫 프레임)
    37.98s  agent 발화 시작: <ret> 덴버의 가드 앤 그레이스 스테이크 하우스는 현대적인 분위기와 다양한 와인 목록을 자랑하는 고급 스
    38.09s  user  발화 끝
    38.76s  ⚡SPAN 주입 [d'=1.24s / d_lead=11.92s]: Denver's Guard and Grace steakhouse is known for its modern take on th
    44.16s  user  발화 시작: 응.
    44.66s  user  발화 끝
    49.83s  agent 발화 시작: 그곳은 훌륭한 선택이 될 겁니다. 훌륭한 스테이크와 와인을 즐길 수 있을 거예요. —
    49.90s  agent 발화 끝
    55.38s  user  발화 시작: …근데 혹시 거긴 예약이 얼마나 빨리 차나요? 지금 당장 예약해야 할까요?
    56.17s  agent 발화 끝
    59.01s  <ret> 발화 (turn11 첫 프레임)
    59.08s  agent 발화 시작: <ret> 오월 십일 저녁 일곱시에 두명 기준으로 예약 가능한 자리가 제한적이며, 대기 시간이 삼십분에서 사
    59.13s  user  발화 끝
    59.43s  ⚡SPAN 주입 [d'=0.43s / d_lead=9.46s]: (tool result) {"restaurant name": "Guard and Grace", "date": "2024-05-
    63.58s  user  발화 시작: 어.
    64.73s  user  발화 끝
    68.36s  user  발화 시작: 아, 그럼 조금 일찍 예약할까요? 여섯시 반으로 해 주시면 감사하겠습니다.
    68.53s  agent 발화 끝
    71.50s  <ret> 발화 (turn14 첫 프레임)
    72.06s  user  발화 끝
    72.07s  agent 발화 시작: <ret> 가드 앤 그레이스에 오월 십일 저녁 여섯시 반에 두명으로 예약이 완료되었습니다. 확인 번호는 알 
    72.34s  ⚡SPAN 주입 [d'=0.85s / d_lead=9.51s]: (tool result) {"confirmation id": "RT295X", "restaurant name": "Guard 
    75.12s  user  발화 시작: 그래.
    75.52s  user  발화 끝
    81.58s  agent 발화 끝
    81.68s  user  발화 시작: 와, 정말 감사합니다. 덕분에 편하게 여행 계획을 세울 수 있겠네요.
    83.21s  agent 발화 시작: 네.
    83.71s  agent 발화 끝
    86.29s  agent 발화 시작: 천만에요. 즐거운 여행 되시길 바랍니다.
    86.36s  user  발화 끝
    90.31s  agent 발화 끝
