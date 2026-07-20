# v3_rag_25_ko — 전 이벤트 시간순 타임라인 (L=agent/R=user)
# <ret>=agent 턴 첫 프레임(lead 첫 토큰 대체) · SPAN=lead 안 d' 지점(문장 중간 가능, Eq.3 sample_rag_delay)
# CONTEXT DB (moshi가 이 유저에 대해 내부 보유하는 저장 데이터 — 원본 JSON):
# {
#   "profile": {
#     "user_id": "v3_rag_25",
#     "name": "윤율",
#     "location": {
#       "city": "Busan",
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
#       "date": "2026-06-24",
#       "category": "cuisine",
#       "text": "User's favorite cuisine is Vietnamese."
#     },
#     {
#       "date": "2026-05-20",
#       "category": "wake",
#       "text": "User usually wakes up at 5:30am for a run."
#     },
#     {
#       "date": "2026-04-24",
#       "category": "work",
#       "text": "User works as a paramedic."
#     },
#     {
#       "date": "2026-04-18",
#       "category": "car",
#       "text": "User drives a 2021 Tesla Model 3."
#     },
#     {
#       "date": "2026-04-12",
#       "category": "show",
#       "text": "User is currently watching a stand-up comedy special."
#     },
#     {
#       "date": "2026-03-02",
#       "category": "phone",
#       "text": "User uses a Galaxy Z Flip."
#     },
#     {
#       "date": "2025-12-12",
#       "category": "diet",
#       "text": "User is kosher."
#     }
#   ],
#   "conversation_summaries": [
#     {
#       "date": "2026-05-27",
#       "title": "Setting up a home network",
#       "bullets": [
#         "asked about mesh routers for a 3-story house",
#         "wanted coverage for the basement office"
#       ]
#     },
#     {
#       "date": "2026-05-05",
#       "title": "Switching phone plans",
#       "bullets": [
#         "uses about 30GB of data a month",
#         "wants to keep the same number"
#       ]
#     },
#     {
#       "date": "2026-04-12",
#       "title": "Planning a camping trip",
#       "bullets": [
#         "a weekend at a lake site in September",
#         "asked about a 4-person tent and a cooler"
#       ]
#     },
#     {
#       "date": "2026-02-15",
#       "title": "Planning a wedding",
#       "bullets": [
#         "guest list around 80 people",
#         "comparing two venues for next May"
#       ]
#     }
#   ]
# }

# EXAMINER(FDB-v2) 단계: S1 혹시 레이지 앨범 낸 메탈코어 밴드 어디 사람들인지 아세요? | S2 마스토돈 음악 스타일은 좀 어떤 편이에요? | S3 … 혹시 마스토돈 멤버들이 다른 밴드 활동도 했었나요? | S4 …마스토돈 음악에도 영향을 많이 줬나요?

     0.00s  user  발화 시작: 혹시 레이지 앨범 낸 메탈코어 밴드 어디 사람들인지 아세요?
     3.81s  <ret> 발화 (turn1 첫 프레임)
     3.89s  agent 발화 시작: <ret> 이천사년에 레비아탄이라는 두 번째 정규 앨범을 낸 밴드는 미국의 메탈코어 밴드 마스토돈이에요.
     3.93s  user  발화 끝
     5.03s  ⚡SPAN 주입 [d'=1.22s / d_lead=6.48s]: The American metalcore band Mastodon released their second full-length
    10.38s  agent 발화 끝
    10.53s  user  발화 시작: 마스토돈요? 이름이 좀 특이하네요. 멤버들은 어디 출신이에요?
    15.13s  <ret> 발화 (turn3 첫 프레임)
    15.56s  agent 발화 시작: <ret> 마스토돈은 이천년에 조지아주 애틀랜타에서 결성되었고, 트로이 샌더스, 브렌트 힌즈, 빌 켈리허, 
    15.58s  user  발화 끝
    15.72s  ⚡SPAN 주입 [d'=0.59s / d_lead=9.65s]: Mastodon formed in Atlanta, Georgia, in 2000, and consists of Troy San
    25.21s  agent 발화 끝
    25.50s  user  발화 시작: 애틀랜타요? 거기는 또 처음 듣는 곳인데, 미국 남부인가요?
    29.61s  user  발화 끝
    29.62s  agent 발화 시작: 네, 미국 남부에 있는 조지아주의 주도입니다.
    32.96s  agent 발화 끝
    33.49s  user  발화 시작: 마스토돈 음악 스타일은 좀 어떤 편이에요?
    35.77s  <ret> 발화 (turn7 첫 프레임)
    36.15s  ⚡SPAN 주입 [d'=0.38s / d_lead=6.86s]: Mastodon’s sound is often described as a blend of progressive metal, s
    36.38s  agent 발화 시작: <ret> 마스토돈의 음악 스타일은 프로그레시브 메탈, 슬러지 메탈, 그리고 포스트 메탈이 혼합된 것으로 묘
    36.54s  user  발화 끝
    40.87s  user  발화 시작: 네.
    41.28s  user  발화 끝
    43.23s  agent 발화 끝
    43.38s  user  발화 시작: 프로그레시브 메탈이라… 좀 어렵게 들리네요. 다른 밴드랑 비교하면 어떤가요?
    48.90s  agent 발화 시작: 비슷한 스타일의 밴드는 Tool이나 Opeth 같은 팀들이 있어요.
    49.03s  user  발화 끝
    50.69s  user  발화 시작: 아.
    51.37s  user  발화 끝
    52.69s  agent 발화 끝
    52.72s  user  발화 시작: 툴도 좋아하는데, 마스토돈은 툴보다 좀 더 —
    57.10s  user  발화 시작: … 혹시 마스토돈 멤버들이 다른 밴드 활동도 했었나요?
    57.12s  user  발화 끝
    60.69s  <ret> 발화 (turn14 첫 프레임)
    60.84s  user  발화 끝
    60.90s  agent 발화 시작: <ret> 마스토돈의 브렌트 힌즈는 카일사라는 밴드의 멤버로도 활동했어요.
    61.61s  ⚡SPAN 주입 [d'=0.92s / d_lead=4.59s]: Brent Hinds of Mastodon was also a member of the band Kylesa.
    62.82s  user  발화 시작: 맞아요.
    63.36s  user  발화 끝
    65.49s  agent 발화 끝
    66.78s  user  발화 시작: 카일사요? 그 밴드는 또 어떤 스타일이에요?
    68.98s  <ret> 발화 (turn17 첫 프레임)
    69.41s  agent 발화 시작: <ret> 카일사는 이천일년에 조지아주 세이바나에서 결성된 미국의 슬러지 메탈 밴드예요.
    69.51s  user  발화 끝
    69.96s  ⚡SPAN 주입 [d'=0.98s / d_lead=5.37s]: Kylesa is an American sludge metal band formed in Savannah, Georgia, i
    73.01s  user  발화 시작: 예.
    73.46s  user  발화 끝
    74.78s  agent 발화 끝
    74.91s  user  발화 시작: 슬러지 메탈이 계속 나오네요.…
    76.98s  user  발화 끝
    78.64s  user  발화 시작: …마스토돈 음악에도 영향을 많이 줬나요?
    80.89s  agent 발화 시작: 네네.
    81.71s  agent 발화 끝
    82.02s  user  발화 끝
    82.59s  agent 발화 시작: 네, 마스토돈의 음악에 슬러지 메탈의 영향이 꽤 크다고 알려져 있어요.
    84.24s  user  발화 시작: 네.
    84.86s  user  발화 끝
    87.08s  agent 발화 끝
    88.29s  user  발화 시작: 알겠습니다. 마스토돈 멤버들 중에 한국인 멤버는 없겠죠?
    92.91s  user  발화 끝
    93.47s  agent 발화 시작: 아니요, 멤버들은 모두 미국 시민권자입니다.
    97.11s  agent 발화 끝
