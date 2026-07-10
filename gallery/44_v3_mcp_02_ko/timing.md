# v3_mcp_02_ko — 전 이벤트 시간순 타임라인 (L=agent/R=user)
# <ret>=agent 턴 첫 프레임(lead 첫 토큰 대체) · SPAN=lead 안 d' 지점(문장 중간 가능, Eq.3 sample_rag_delay)
# CONTEXT DB (moshi가 이 유저에 대해 내부 보유하는 저장 데이터 — 원본 JSON):
# {
#   "profile": {
#     "user_id": "v3_mcp_02",
#     "name": "시담",
#     "location": {
#       "city": "Busan",
#       "country": "South Korea",
#       "timezone": "Asia/Seoul (KST, UTC+9)",
#       "currency": "KRW (₩)"
#     },
#     "nationality": "Korean",
#     "gender": "female",
#     "age_range": "late 20s",
#     "language": "Korean"
#   },
#   "saved_memories": [
#     {
#       "date": "2026-04-07",
#       "category": "allergy",
#       "text": "User is allergic to penicillin."
#     },
#     {
#       "date": "2026-04-05",
#       "category": "cuisine",
#       "text": "User's favorite cuisine is sushi."
#     },
#     {
#       "date": "2026-03-30",
#       "category": "diet",
#       "text": "User is pescatarian."
#     },
#     {
#       "date": "2026-01-02",
#       "category": "work",
#       "text": "User works as a high-school teacher."
#     },
#     {
#       "date": "2025-12-31",
#       "category": "home",
#       "text": "User's home address is 부산 해운대구 우동 123-4."
#     }
#   ],
#   "conversation_summaries": [
#     {
#       "date": "2025-11-25",
#       "title": "Planning a birthday dinner",
#       "bullets": [
#         "party of six",
#         "looking for outdoor seating"
#       ]
#     }
#   ]
# }


     0.00s  user  발화 시작: 즈니 카페 전화번호 좀 알려줄 수 있어?
     2.04s  <ret> 발화 (turn1 첫 프레임)
     2.44s  agent 발화 시작: <ret> 즈니 카페 전화번호는 사 일 오 오 오 삼 일 사 삼 일이에요. 샌프란시스코에 있네요.
     2.44s  ⚡SPAN 주입 [d'=2.00s / d_lead=6.68s]: (tool result) Zuni Café, 1658 Market St, San Francisco, CA 94102, Unit
     2.58s  user  발화 끝
     6.08s  user  발화 시작: 정말요?
     6.89s  user  발화 끝
     9.11s  agent 발화 끝
     9.28s  user  발화 시작: 오, 고마워. 그 근처에 괜찮은 호텔 있어?
    11.86s  user  발화 끝
    12.26s  agent 발화 시작: 어떤 스타일의 호텔을 찾으세요?
    13.91s  agent 발화 끝
