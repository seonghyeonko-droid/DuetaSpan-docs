# v3_chain_05_ko — 전 이벤트 시간순 타임라인 (L=agent/R=user)
# <ret>=agent 턴 첫 프레임(lead 첫 토큰 대체) · SPAN=lead 안 d' 지점(문장 중간 가능, Eq.3 sample_rag_delay)
# CONTEXT DB (moshi가 이 유저에 대해 내부 보유하는 저장 데이터 — 원본 JSON):
# {
#   "profile": {
#     "user_id": "v3_chain_05",
#     "name": "서아",
#     "location": {
#       "city": "Busan",
#       "country": "South Korea",
#       "timezone": "Asia/Seoul (KST, UTC+9)",
#       "currency": "KRW (₩)"
#     },
#     "nationality": "Korean",
#     "gender": "female",
#     "age_range": "mid 30s",
#     "language": "Korean"
#   },
#   "saved_memories": [
#     {
#       "date": "2026-06-05",
#       "category": "phone",
#       "text": "User uses a Galaxy Z Flip."
#     },
#     {
#       "date": "2026-06-04",
#       "category": "hobby",
#       "text": "User is into freediving."
#     },
#     {
#       "date": "2026-04-14",
#       "category": "dish",
#       "text": "User's go-to comfort dish is gnocchi."
#     },
#     {
#       "date": "2026-03-07",
#       "category": "skill",
#       "text": "User is getting fairly good at film photography."
#     },
#     {
#       "date": "2025-12-17",
#       "category": "cuisine",
#       "text": "User's favorite cuisine is Turkish."
#     }
#   ],
#   "conversation_summaries": [
#     {
#       "date": "2026-06-02",
#       "title": "Building a PC",
#       "bullets": [
#         "budget around 2M won for gaming",
#         "torn between two GPUs"
#       ]
#     },
#     {
#       "date": "2026-04-30",
#       "title": "Renovating the bathroom",
#       "bullets": [
#         "budget of 6M won",
#         "wants a walk-in shower instead of a tub"
#       ]
#     }
#   ]
# }


     0.00s  user  발화 시작: 데이터 분석 코드 생성 세션…
     2.45s  user  발화 끝
     4.15s  user  발화 시작: …사십이 종료하고 테스트 생성해 줘.
     5.67s  agent 발화 시작: 그렇죠.
     6.30s  agent 발화 끝
     6.92s  user  발화 끝
     7.01s  <ret> 발화 (turn3 첫 프레임)
     7.13s  agent 발화 시작: <ret> 세션 사십이를 종료했고, 테스트도 성공적으로 생성됐어. 확인 번호는 구 비 칠 엑스 이 엘이야.
     8.04s  ⚡SPAN 주입 [d'=1.03s / d_lead=6.35s]: (tool result) Session 42 ended. Tests generated successfully. Confirma
    10.40s  user  발화 시작: 응.
    10.75s  user  발화 끝
    13.42s  user  발화 시작: 확인번호 다시 한 번만 알려줘.
    13.48s  agent 발화 끝
    15.47s  agent 발화 시작: 확인 번호는 구 비 칠 엑스 이 엘이야.
    15.68s  user  발화 끝
    18.70s  agent 발화 끝
