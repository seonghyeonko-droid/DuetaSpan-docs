# v3_selfc_08_ko — 전 이벤트 시간순 타임라인 (L=agent/R=user)
# <ret>=agent 턴 첫 프레임(lead 첫 토큰 대체) · SPAN=lead 안 d' 지점(문장 중간 가능, Eq.3 sample_rag_delay)
# CONTEXT DB (moshi가 이 유저에 대해 내부 보유하는 저장 데이터 — 원본 JSON):
# {
#   "profile": {
#     "user_id": "v3_selfc_08",
#     "name": "윤경",
#     "location": {
#       "city": "Seoul",
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
#       "date": "2026-03-21",
#       "category": "seat",
#       "text": "User prefers a window seat when traveling."
#     },
#     {
#       "date": "2026-03-19",
#       "category": "pet",
#       "text": "User has a Golden Retriever named Max."
#     },
#     {
#       "date": "2026-03-17",
#       "category": "work",
#       "text": "User works as a physical therapist."
#     },
#     {
#       "date": "2025-06-17",
#       "category": "allergy",
#       "text": "User is allergic to penicillin."
#     }
#   ],
#   "conversation_summaries": [
#     {
#       "date": "2026-01-24",
#       "title": "Planning a birthday dinner",
#       "bullets": [
#         "party of six",
#         "looking for outdoor seating"
#       ]
#     }
#   ]
# }


     0.00s  user  발화 시작: 앱 로그 파일에서 'ERROR, Something went wrong'을 'WARNING, Potential
     6.35s  <ret> 발화 (turn1 첫 프레임)
     6.58s  user  발화 끝
     6.67s  agent 발화 시작: <ret> 앱 로그 파일 수정이 완료됐어요. 'ERROR, Something went wrong'이 'WAR
     6.67s  ⚡SPAN 주입 [d'=2.00s / d_lead=7.60s]: (tool result) File 'app log file' successfully edited. 'ERROR, Somethi
    10.36s  user  발화 시작: 그래.
    11.09s  user  발화 끝
    14.27s  agent 발화 끝
    14.50s  user  발화 시작: 그런데… 파일 경로가 좀 틀린 것 같아. 정확히는 'application.log'야.
    19.10s  <ret> 발화 (turn4 첫 프레임)
    19.40s  user  발화 끝
    19.41s  agent 발화 시작: <ret> 다시 'application.log' 파일로 수정했어요. 'ERROR, Something went
    19.42s  ⚡SPAN 주입 [d'=2.00s / d_lead=11.27s]: (tool result) File 'application.log' successfully edited. 'ERROR, Some
    30.68s  agent 발화 끝
