# v3_mcp_00_ko — 전 이벤트 시간순 타임라인 (L=agent/R=user)
# <ret>=agent 턴 첫 프레임(lead 첫 토큰 대체) · SPAN=lead 안 d' 지점(문장 중간 가능, Eq.3 sample_rag_delay)
# CONTEXT DB (moshi가 이 유저에 대해 내부 보유하는 저장 데이터 — 원본 JSON):
# {
#   "profile": {
#     "user_id": "v3_mcp_00",
#     "name": "혜은",
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
#       "date": "2026-01-27",
#       "category": "cuisine",
#       "text": "User's favorite cuisine is Thai."
#     },
#     {
#       "date": "2025-08-18",
#       "category": "work",
#       "text": "User works as a software engineer."
#     },
#     {
#       "date": "2025-07-20",
#       "category": "trip",
#       "text": "User is planning a trip to Iceland in March."
#     },
#     {
#       "date": "2025-06-21",
#       "category": "seat",
#       "text": "User prefers a window seat when traveling."
#     }
#   ],
#   "conversation_summaries": [
#     {
#       "date": "2025-09-18",
#       "title": "Comparing gym memberships",
#       "bullets": [
#         "wants a pool",
#         "close to the office"
#       ]
#     },
#     {
#       "date": "2025-06-19",
#       "title": "Researching a used car",
#       "bullets": [
#         "comparing hybrid models",
#         "wants under 30k miles"
#       ]
#     }
#   ]
# }


     0.00s  user  발화 시작: 천안문 광장에서 이화원으로 택시 좀 불러주세요.
     3.21s  <ret> 발화 (turn1 첫 프레임)
     3.45s  agent 발화 시작: <ret> 네, 천안문 광장에서 이화원까지 택시를 불러드렸어요. 이천이십육년 칠월 십일 오후 두시 사십오분에
     3.45s  ⚡SPAN 주입 [d'=2.00s / d_lead=16.12s]: (tool result) {"pickup time": "2026-07-10T14:45:00+08:00", "estimated 
     3.45s  user  발화 끝
    19.57s  user  발화 시작: 기사님 성함이 어떻게 되죠?
    19.57s  agent 발화 끝
    21.88s  agent 발화 시작: 기사님 성함은 리 웨이입니다.
    21.88s  user  발화 끝
    24.18s  agent 발화 끝
