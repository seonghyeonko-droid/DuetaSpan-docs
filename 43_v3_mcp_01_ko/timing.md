# v3_mcp_01_ko — 전 이벤트 시간순 타임라인 (L=agent/R=user)
# <ret>=agent 턴 첫 프레임(lead 첫 토큰 대체) · SPAN=lead 안 d' 지점(문장 중간 가능, Eq.3 sample_rag_delay)
# CONTEXT DB (moshi가 이 유저에 대해 내부 보유하는 저장 데이터 — 원본 JSON):
# {
#   "profile": {
#     "user_id": "v3_mcp_01",
#     "name": "민우",
#     "location": {
#       "city": "Seoul",
#       "country": "South Korea",
#       "timezone": "Asia/Seoul (KST, UTC+9)",
#       "currency": "KRW (₩)"
#     },
#     "nationality": "Korean",
#     "gender": "female",
#     "age_range": "early 20s",
#     "language": "Korean"
#   },
#   "saved_memories": [
#     {
#       "date": "2026-02-24",
#       "category": "work",
#       "text": "User works as a graduate student."
#     },
#     {
#       "date": "2025-10-02",
#       "category": "pet",
#       "text": "User has a Golden Retriever named Max."
#     },
#     {
#       "date": "2025-09-13",
#       "category": "seat",
#       "text": "User prefers an aisle seat when traveling."
#     },
#     {
#       "date": "2025-08-26",
#       "category": "allergy",
#       "text": "User is allergic to shellfish."
#     },
#     {
#       "date": "2025-07-16",
#       "category": "diet",
#       "text": "User is gluten-free."
#     }
#   ],
#   "conversation_summaries": [
#     {
#       "date": "2026-02-23",
#       "title": "Researching a used car",
#       "bullets": [
#         "comparing hybrid models",
#         "wants under 30k miles"
#       ]
#     }
#   ]
# }

# EXAMINER(FDB-v2) 단계: S1 데이비드 리한테 오달러 보내줘. | S2 아니, 그만. 근데 지금 시애틀 날씨 어때? | S3 … 잠깐만, 근데 그 돈은 내 계좌에서 바로 빠지는 거야? | S4 알았어. 고마워.

     0.00s  user  발화 시작: 데이비드 리한테 오달러 보내줘.
     2.05s  <ret> 발화 (turn1 첫 프레임)
     2.26s  user  발화 끝
     2.28s  agent 발화 시작: <ret> 데이비드 리 님께 오달러 요청이 시작됐습니다. 거래 아이디는 구 이 팔 칠 사 오 비입니다. 혹시
     2.29s  ⚡SPAN 주입 [d'=2.00s / d_lead=8.57s]: (tool result) Payment request to David Lee for $5.00 initiated. Transa
     7.59s  user  발화 시작: 응.
     7.90s  user  발화 끝
    10.49s  user  발화 시작: 아니, 그만. 근데 지금 시애틀 날씨 어때?
    10.85s  agent 발화 끝
    13.26s  <ret> 발화 (turn4 첫 프레임)
    13.49s  agent 발화 시작: <ret> 시애틀은 현재 십팔 점 삼도이고, 습도는 육십이퍼센트, 바람은 시속 칠 점 이킬로미터입니다. 맑은
    13.50s  ⚡SPAN 주입 [d'=2.00s / d_lead=8.67s]: (tool result) Seattle, WA: 18.3°C, humidity 62%, wind 7.2 km/h, clear 
    13.54s  user  발화 끝
    21.48s  user  발화 시작: … 잠깐만, 근데 그 돈은 내 계좌에서 바로 빠지는 거야?
    22.16s  agent 발화 끝
    24.79s  agent 발화 시작: 네, 요청이 승인되면 바로 계좌에서 차감됩니다. 안전하게 처리되니 걱정 마세요.
    24.86s  user  발화 끝
    30.80s  agent 발화 끝
    31.26s  user  발화 시작: 알았어. 고마워.
    33.00s  user  발화 끝
