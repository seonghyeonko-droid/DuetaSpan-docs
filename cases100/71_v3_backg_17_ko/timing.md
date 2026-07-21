# v3_backg_17_ko — 전 이벤트 시간순 타임라인 (L=agent/R=user)
# <ret>=agent 턴 첫 프레임(lead 첫 토큰 대체) · SPAN=lead 안 d' 지점(문장 중간 가능, Eq.3 sample_rag_delay)
# CONTEXT DB (moshi가 이 유저에 대해 내부 보유하는 저장 데이터 — 원본 JSON):
# {
#   "profile": {
#     "user_id": "v3_backg_17",
#     "name": "현람",
#     "location": {
#       "city": "Seoul",
#       "country": "South Korea",
#       "timezone": "Asia/Seoul (KST, UTC+9)",
#       "currency": "KRW (₩)"
#     },
#     "nationality": "Korean",
#     "gender": "male",
#     "age_range": "50s",
#     "language": "Korean"
#   },
#   "saved_memories": [
#     {
#       "date": "2026-04-19",
#       "category": "anniversary",
#       "text": "User's anniversary is February 15."
#     },
#     {
#       "date": "2026-03-19",
#       "category": "savings",
#       "text": "User is saving for a wedding."
#     },
#     {
#       "date": "2026-03-05",
#       "category": "plant",
#       "text": "User is growing basil on the windowsill at home."
#     },
#     {
#       "date": "2026-02-17",
#       "category": "streaming",
#       "text": "User subscribes to Disney+ and YouTube Premium."
#     },
#     {
#       "date": "2026-02-15",
#       "category": "partner",
#       "text": "User's partner is named Noah."
#     },
#     {
#       "date": "2026-01-31",
#       "category": "car",
#       "text": "User drives a 2018 Mazda CX-5."
#     },
#     {
#       "date": "2025-12-10",
#       "category": "schedule",
#       "text": "User has on-call weekends."
#     }
#   ],
#   "conversation_summaries": [
#     {
#       "date": "2026-06-03",
#       "title": "Planning a dinner party",
#       "bullets": [
#         "hosting eight friends on Saturday",
#         "one guest is gluten-free"
#       ]
#     },
#     {
#       "date": "2026-01-20",
#       "title": "Sorting out a visa",
#       "bullets": [
#         "applying for a working-holiday visa to Australia",
#         "asked about the bank-balance requirement"
#       ]
#     }
#   ]
# }


     0.00s  user  발화 시작: 엔론 회계 부정 사건에, 어떤 은행들이 연루됐었지?
     2.38s  <ret> 발화 (turn1 첫 프레임)
     2.98s  agent 발화 시작: <ret> 엔론 스캔들에 연루된 은행들이 몇 군데 있었는데, 특히 메릴린치가 여러 금융 수법을 통해 관련되어
     3.23s  user  발화 끝
     3.30s  ⚡SPAN 주입 [d'=0.92s / d_lead=7.19s]: Several banks, including Merrill Lynch, were involved in the Enron sca
     7.45s  user  발화 시작: 그치.
     8.08s  user  발화 끝
    10.17s  agent 발화 끝
    10.90s  user  발화 시작: 아, 오늘 날씨 진짜 덥다.
    12.79s  user  발화 시작: 메릴린치가 구체적으로 뭘 했길래?
    13.03s  user  발화 끝
    15.16s  <ret> 발화 (turn5 첫 프레임)
    15.28s  user  발화 끝
    15.36s  agent 발화 시작: <ret> 메릴린치는 특수 목적 법인을 이용해서 엔론의 부채를 숨기고 이익을 부풀리는 걸 도왔다고 해요.
    16.38s  ⚡SPAN 주입 [d'=1.22s / d_lead=7.00s]: Merrill Lynch helped Enron hide debt and inflate profits through speci
    22.36s  agent 발화 끝
