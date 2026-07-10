# v3_pause_16_ko — 전 이벤트 시간순 타임라인 (L=agent/R=user)
# <ret>=agent 턴 첫 프레임(lead 첫 토큰 대체) · SPAN=lead 안 d' 지점(문장 중간 가능, Eq.3 sample_rag_delay)
# CONTEXT DB (moshi가 이 유저에 대해 내부 보유하는 저장 데이터 — 원본 JSON):
# {
#   "profile": {
#     "user_id": "v3_pause_16",
#     "name": "수람",
#     "location": {
#       "city": "Seoul",
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
#       "date": "2026-05-27",
#       "category": "hobby",
#       "text": "User is into alpine wildflower photography."
#     },
#     {
#       "date": "2026-05-23",
#       "category": "pet",
#       "text": "User has a Golden Retriever named Max."
#     },
#     {
#       "date": "2025-07-04",
#       "category": "cuisine",
#       "text": "User's favorite cuisine is Korean BBQ."
#     },
#     {
#       "date": "2025-07-03",
#       "category": "allergy",
#       "text": "User is allergic to penicillin."
#     }
#   ],
#   "conversation_summaries": [
#     {
#       "date": "2026-06-17",
#       "title": "Apartment hunting downtown",
#       "bullets": [
#         "wanted a pet-friendly building",
#         "budget for 2 bedrooms"
#       ]
#     }
#   ]
# }

# EXAMINER(FDB-v2) 단계: S1 예수 그리스도 슈퍼스타 가사는 누가 썼는지 궁금해. | S2 아, 에비타도 팀 라이스 작품이었구나. | S3 그 사람이 쓴 가사 스타일이 좀 독특하잖아요… | S4 …뮤지컬 작가들하고 어떻게 다른 건가요?

     0.00s  user  발화 시작: 예수 그리스도 슈퍼스타 가사는 누가 썼는지 궁금해.
     3.20s  <ret> 발화 (turn1 첫 프레임)
     3.60s  agent 발화 시작: <ret> 예수 그리스도 슈퍼스타 가사는 천구백칠십년 록 오페라를 위해 팀 라이스가 썼어요.
     3.60s  ⚡SPAN 주입 [d'=2.00s / d_lead=6.72s]: Tim Rice wrote the lyrics for the 1970 rock opera Jesus Christ Superst
     3.66s  user  발화 끝
    10.27s  user  발화 시작: 팀 라이스… 다른 작품도 많이 했어요?
    10.32s  agent 발화 끝
    12.92s  <ret> 발화 (turn3 첫 프레임)
    13.23s  agent 발화 시작: <ret> 팀 라이스는 앤드류 로이드 웨버를 포함한 여러 작곡가와 협업해서 에비타, 요셉과 환상적인 색깔 꿈
    13.24s  ⚡SPAN 주입 [d'=2.00s / d_lead=9.83s]: Tim Rice has collaborated with several composers, including Andrew Llo
    13.45s  user  발화 끝
    23.06s  agent 발화 끝
    23.77s  user  발화 시작: 아, 에비타도 팀 라이스 작품이었구나.
    26.21s  agent 발화 시작: 맞아요, 팀 라이스는 정말 다양한 작품에 참여했답니다.
    26.31s  user  발화 끝
    30.54s  user  발화 시작: 그 사람이 쓴 가사 스타일이 좀 독특하잖아요…
    30.65s  agent 발화 끝
    33.89s  agent 발화 시작: 팀 라이스의 가사 스타일은—
    33.96s  user  발화 끝
    35.77s  user  발화 시작: …그 독특한 스타일이 다른…
    35.92s  agent 발화 끝
    38.03s  user  발화 끝
    39.28s  user  발화 시작: …뮤지컬 작가들하고 어떻게 다른 건가요?
    41.66s  <ret> 발화 (turn10 첫 프레임)
    42.06s  agent 발화 시작: <ret> 죄송하지만, 다른 뮤지컬 작가들과의 스타일 차이에 대한 정보는 찾을 수 없었어요.
    42.06s  ⚡SPAN 주입 [d'=1.20s / d_lead=5.60s]: (no information found)
    42.19s  user  발화 끝
    44.07s  user  발화 시작: 응.
    44.52s  user  발화 끝
    47.48s  agent 발화 시작: 혹시 다른 뮤지컬에 대해 궁금한 점이 있으신가요?
    47.66s  agent 발화 끝
    50.81s  agent 발화 끝
