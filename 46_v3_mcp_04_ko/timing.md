# v3_mcp_04_ko — 전 이벤트 시간순 타임라인 (L=agent/R=user)
# <ret>=agent 턴 첫 프레임(lead 첫 토큰 대체) · SPAN=lead 안 d' 지점(문장 중간 가능, Eq.3 sample_rag_delay)
# CONTEXT DB (moshi가 이 유저에 대해 내부 보유하는 저장 데이터 — 원본 JSON):
# {
#   "profile": {
#     "user_id": "v3_mcp_04",
#     "name": "현영",
#     "location": {
#       "city": "Seoul",
#       "country": "South Korea",
#       "timezone": "Asia/Seoul (KST, UTC+9)",
#       "currency": "KRW (₩)"
#     },
#     "nationality": "Korean",
#     "gender": "non-binary",
#     "age_range": "late 20s",
#     "language": "Korean"
#   },
#   "saved_memories": [
#     {
#       "date": "2026-03-07",
#       "category": "pet",
#       "text": "User has a Siamese cat named Bella."
#     },
#     {
#       "date": "2026-03-05",
#       "category": "home",
#       "text": "User's home address is 서울 강남구 역삼동 678-9."
#     },
#     {
#       "date": "2025-12-25",
#       "category": "hobby",
#       "text": "User is into rock climbing."
#     },
#     {
#       "date": "2025-10-16",
#       "category": "cuisine",
#       "text": "User's favorite cuisine is Ethiopian."
#     },
#     {
#       "date": "2025-08-27",
#       "category": "work",
#       "text": "User works as a graduate student."
#     },
#     {
#       "date": "2025-07-01",
#       "category": "seat",
#       "text": "User prefers an aisle seat when traveling."
#     }
#   ],
#   "conversation_summaries": [
#     {
#       "date": "2025-06-25",
#       "title": "Apartment hunting downtown",
#       "bullets": [
#         "wanted a pet-friendly building",
#         "budget for 2 bedrooms"
#       ]
#     }
#   ]
# }

# EXAMINER(FDB-v2) 단계: S1 코드 생성 세션 시작해서 테스트 파일들을 내 문서 폴더에 저장 | S2 이번 주 토요일에 영화 볼 만한 거 있어? | S3 …혹시 '인사이드 아웃 이'… | S4 …예매해 줄 수 있어?

     0.00s  user  발화 시작: 코드 생성 세션 시작해서 테스트 파일들을 내 문서 폴더에 저장해 줘.
     0.00s  <ret> 발화 (turn1 첫 프레임)
     0.00s  <ret> 발화 (turn3 첫 프레임)
     0.12s  agent 발화 시작: <ret> 코드 생성 세션을 시작하고 테스트 파일들을 문서 폴더에 저장해 드렸습니다.
     0.12s  ⚡SPAN 주입 [d'=0.11s / d_lead=0.11s]: (tool result) Directory "Documents/tests" created successfully.
     0.12s  user  발화 끝
     0.17s  <ret> 발화 (turn5 첫 프레임)
     0.22s  user  발화 시작: 혹시 지금 서울 날씨 어때?
     0.22s  agent 발화 끝
     0.27s  agent 발화 시작: <ret> 현재 서울 날씨는 이십팔 점 삼도이고, 습도는 육십오퍼센트, 풍속은 시속 사 점 일킬로미터입니다.
     0.27s  ⚡SPAN 주입 [d'=0.14s / d_lead=0.14s]: (tool result) Current weather in Seoul: 28.3°C, humidity 65%, wind 4.1
     0.27s  user  발화 끝
     0.41s  user  발화 시작: 이번 주 토요일에 영화 볼 만한 거 있어?
     0.41s  agent 발화 끝
     0.49s  agent 발화 시작: <ret> 이번 주 토요일에는 '인사이드 아웃 이'가 오후 두시, 다섯시, 여덟시에 상영하고, '배드 보이 
     0.49s  ⚡SPAN 주입 [d'=0.25s / d_lead=0.25s]: (tool result) Showing "Inside Out 2" at 14:00, 17:00, 20:00. "Bad Boys
     0.49s  user  발화 끝
     0.59s  <ret> 발화 (turn8 첫 프레임)
     0.75s  user  발화 시작: …혹시 '인사이드 아웃 이'…
     0.75s  agent 발화 끝
     0.79s  user  발화 시작: …예매해 줄 수 있어?
     0.79s  user  발화 끝
     0.83s  agent 발화 시작: <ret> '인사이드 아웃 이' 오후 두시 티켓 두장이 확정되었습니다. 확인 코드는 칠 팔 구 이 에이 비입
     0.83s  ⚡SPAN 주입 [d'=0.17s / d_lead=0.17s]: (tool result) 2 tickets for "Inside Out 2" at 14:00 confirmed. Confirm
     0.83s  user  발화 끝
     1.00s  agent 발화 끝
