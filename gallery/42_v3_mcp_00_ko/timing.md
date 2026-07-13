# v3_mcp_00_ko — 전 이벤트 시간순 타임라인 (L=agent/R=user)
# <ret>=agent 턴 첫 프레임(lead 첫 토큰 대체) · SPAN=lead 안 d' 지점(문장 중간 가능, Eq.3 sample_rag_delay)
# CONTEXT DB (moshi가 이 유저에 대해 내부 보유하는 저장 데이터 — 원본 JSON):
# {
#   "profile": {
#     "user_id": "v3_mcp_00",
#     "name": "보진",
#     "location": {
#       "city": "Seoul",
#       "country": "South Korea",
#       "timezone": "Asia/Seoul (KST, UTC+9)",
#       "currency": "KRW (₩)"
#     },
#     "nationality": "Korean",
#     "gender": "male",
#     "age_range": "late 20s",
#     "language": "Korean"
#   },
#   "saved_memories": [
#     {
#       "date": "2026-05-22",
#       "category": "allergy",
#       "text": "User is allergic to cat dander."
#     },
#     {
#       "date": "2026-04-14",
#       "category": "home",
#       "text": "User's home address is 부산 해운대구 우동 123-4."
#     },
#     {
#       "date": "2026-03-06",
#       "category": "work",
#       "text": "User works as a nurse."
#     },
#     {
#       "date": "2025-11-17",
#       "category": "seat",
#       "text": "User prefers an aisle seat when traveling."
#     },
#     {
#       "date": "2025-07-01",
#       "category": "diet",
#       "text": "User is lactose-intolerant."
#     }
#   ],
#   "conversation_summaries": [
#     {
#       "date": "2025-12-09",
#       "title": "Researching a used car",
#       "bullets": [
#         "comparing hybrid models",
#         "wants under 30k miles"
#       ]
#     }
#   ]
# }


     0.00s  user  발화 시작: 커피숍에 앱 잔액으로 삼천구백구십구 원만 결제해 줘.
     3.54s  <ret> 발화 (turn1 첫 프레임)
     3.70s  agent 발화 시작: <ret> 커피숍에 삼천구백구십구 원 결제가 완료되었어요. 거래 아이디는 팔 칠 육 오 사 삼 이 일이고, 
     3.70s  user  발화 끝
     4.18s  ⚡SPAN 주입 [d'=0.64s / d_lead=10.03s]: (tool result) Payment successful. Transaction ID: 87654321. Remaining 
    13.73s  user  발화 시작: 잔액이 얼마 남았는지 다시 한 번 알려줄래?
    13.73s  agent 발화 끝
    17.42s  agent 발화 시작: 앱 잔액은 십이 점 오달러 남았습니다. 혹시 다른 결제가 필요하신가요?
    17.42s  user  발화 끝
    22.70s  agent 발화 끝
