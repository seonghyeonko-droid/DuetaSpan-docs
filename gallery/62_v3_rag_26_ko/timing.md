# v3_rag_26_ko — 전 이벤트 시간순 타임라인 (L=agent/R=user)
# <ret>=agent 턴 첫 프레임(lead 첫 토큰 대체) · SPAN=lead 안 d' 지점(문장 중간 가능, Eq.3 sample_rag_delay)
# CONTEXT DB (moshi가 이 유저에 대해 내부 보유하는 저장 데이터 — 원본 JSON):
# {
#   "profile": {
#     "user_id": "v3_rag_26",
#     "name": "도원",
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
#       "date": "2026-06-10",
#       "category": "pet",
#       "text": "User has a Beagle named Rusty."
#     },
#     {
#       "date": "2026-03-01",
#       "category": "trip",
#       "text": "User is planning a trip to Kyoto in December."
#     },
#     {
#       "date": "2026-02-09",
#       "category": "work",
#       "text": "User works as a architect."
#     },
#     {
#       "date": "2025-09-27",
#       "category": "diet",
#       "text": "User is pescatarian."
#     }
#   ],
#   "conversation_summaries": [
#     {
#       "date": "2026-06-10",
#       "title": "Setting up a home network",
#       "bullets": [
#         "asked about mesh routers",
#         "coverage for a 3-story house"
#       ]
#     },
#     {
#       "date": "2026-04-04",
#       "title": "Comparing gym memberships",
#       "bullets": [
#         "wants a pool",
#         "close to the office"
#       ]
#     },
#     {
#       "date": "2025-10-19",
#       "title": "Apartment hunting downtown",
#       "bullets": [
#         "wanted a pet-friendly building",
#         "budget for 2 bedrooms"
#       ]
#     }
#   ]
# }

# EXAMINER(FDB-v2) 단계: S1 음… 검은색, 빨간색, 노란색이 들어간 국기가 궁금해. 혹시  | S2 독일 국기 말이야. 독일 국기는 어떤 색깔이지? | S3 그럼 독일 국기는 언제 처음 만들어졌어? | S4 오, 그렇구나. 근데 독일은 축구로 유명하잖아. 독일 축구 대

     0.00s  user  발화 시작: 음… 검은색, 빨간색, 노란색이 들어간 국기가 궁금해. 혹시 알아?
     6.16s  user  발화 끝
     6.40s  agent 발화 시작: 어떤 나라의 국기를 찾으시는 건가요? 색깔만으로는 여러 나라가 있을 수 있거든요.
    11.86s  agent 발화 끝
    12.39s  user  발화 시작: 독일 국기 말이야. 독일 국기는 어떤 색깔이지?
    15.29s  <ret> 발화 (turn3 첫 프레임)
    15.68s  agent 발화 시작: <ret> 독일 국기는 검은색, 빨간색, 그리고 금색의 가로 줄무늬 세 개로 이루어져 있습니다.
    15.90s  user  발화 끝
    17.29s  ⚡SPAN 주입 [d'=2.00s / d_lead=5.51s]: [source: Britannica] The flag of Germany consists of three equal horiz
    17.66s  user  발화 시작: 음.
    17.97s  user  발화 끝
    21.19s  agent 발화 끝
    21.58s  user  발화 시작: 그럼 독일 국기는 언제 처음 만들어졌어?
    23.38s  <ret> 발화 (turn6 첫 프레임)
    23.69s  agent 발화 시작: <ret> 독일 국기에 사용된 검은색, 빨간색, 금색 삼색기는 천팔백사십팔 년 독일 혁명 때 처음 사용되었습
    23.93s  user  발화 끝
    24.74s  ⚡SPAN 주입 [d'=1.36s / d_lead=6.67s]: [source: History.com] The black, red, and gold tricolor was first used
    27.31s  user  발화 시작: 어어.
    27.76s  user  발화 끝
    30.36s  agent 발화 끝
    30.99s  user  발화 시작: 오, 그렇구나. 근데 독일은 축구로 유명하잖아. 독일 축구 대표팀 유니폼 색깔은 뭐야?
    36.61s  agent 발화 시작: 독일 축구 대표팀 유니폼 색깔은 주로 흰색과 검은색을 사용하지만, 원정 경기에서는 다른 색상을 사용하기도 합
    36.73s  user  발화 끝
    43.88s  agent 발화 끝
