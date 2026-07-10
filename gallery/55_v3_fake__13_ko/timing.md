# v3_fake__13_ko — 전 이벤트 시간순 타임라인 (L=agent/R=user)
# <ret>=agent 턴 첫 프레임(lead 첫 토큰 대체) · SPAN=lead 안 d' 지점(문장 중간 가능, Eq.3 sample_rag_delay)
# CONTEXT DB (moshi가 이 유저에 대해 내부 보유하는 저장 데이터 — 원본 JSON):
# {
#   "profile": {
#     "user_id": "v3_fake__13",
#     "name": "노빈",
#     "location": {
#       "city": "Busan",
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
#       "date": "2026-05-11",
#       "category": "hobby",
#       "text": "User is into rock climbing."
#     },
#     {
#       "date": "2026-02-19",
#       "category": "pet",
#       "text": "User has a tabby cat named Luna."
#     },
#     {
#       "date": "2026-01-08",
#       "category": "work",
#       "text": "User works as a nurse."
#     },
#     {
#       "date": "2025-11-04",
#       "category": "home",
#       "text": "User's home address is 203 Birch Road."
#     }
#   ],
#   "conversation_summaries": [
#     {
#       "date": "2025-08-04",
#       "title": "Planning a birthday dinner",
#       "bullets": [
#         "party of six",
#         "looking for outdoor seating"
#       ]
#     },
#     {
#       "date": "2025-07-22",
#       "title": "Setting up a home network",
#       "bullets": [
#         "asked about mesh routers",
#         "coverage for a 3-story house"
#       ]
#     },
#     {
#       "date": "2025-06-17",
#       "title": "Comparing gym memberships",
#       "bullets": [
#         "wants a pool",
#         "close to the office"
#       ]
#     }
#   ]
# }

# EXAMINER(FDB-v2) 단계: S1 데미 로바토의 새 앨범이 언제 나오는지 궁금해요. | S2 와, 대단하네요. | S3 …그 앨범에 피처링한 가수가 누구였는지 궁금해요. | S4 데미 로바토의 다른 앨범들도 비슷한 스타일인가요?

     0.00s  user  발화 시작: 데미 로바토의 새 앨범이 언제 나오는지 궁금해요.
     3.25s  <ret> 발화 (turn1 첫 프레임)
     3.33s  user  발화 끝
     3.40s  agent 발화 시작: <ret> 데미 로바토의 다섯 번째 스튜디오 앨범 *Confident*는… 이천십오년 십월에 발매되었어요.
     5.25s  ⚡SPAN 주입 [d'=2.00s / d_lead=6.11s]: [source: Wikipedia] Demi Lovato's fifth studio album, *Confident*, was
     9.47s  user  발화 시작: 아, 그렇군요. 이천십오년 십월이라고 하셨죠?
     9.51s  agent 발화 끝
    12.31s  <ret> 발화 (turn3 첫 프레임)
    12.71s  agent 발화 시작: <ret> 네, 맞아요. 데미 로바토의 *Confident* 앨범은 이천십오년 십월에 출시되었답니다.
    12.89s  user  발화 끝
    13.75s  ⚡SPAN 주입 [d'=1.44s / d_lead=4.86s]: [source: Billboard] *Confident* debuted at number one on the Billboard
    17.55s  agent 발화 시작: *Confident* 앨범은 빌보드 이백 차트에서 일위를 기록하며 데미 로바토의 첫 번째 차트 일위 앨범이 
    17.56s  agent 발화 끝
    23.98s  agent 발화 끝
    24.59s  user  발화 시작: 와, 대단하네요.
    26.01s  user  발화 끝
    26.45s  agent 발화 시작: 네, 정말 대단하죠. 데미 로바토가 얼마나 많은 노력을 기울였을지 상상도 안 돼요. 음악 작업은 창의적인 에
    32.08s  user  발화 시작: 음.
    32.89s  user  발화 끝
    34.84s  user  발화 시작: 음… 솔직히 저는 그 앨범의 노래들이…
    34.88s  agent 발화 끝
    37.67s  agent 발화 시작: 노래들에 대해서는 어떤 느낌이셨나요? 혹시 특별히 좋아하거나 —
    37.79s  user  발화 끝
    41.07s  user  발화 시작: …그 앨범에 피처링한 가수가 누구였는지 궁금해요.
    41.92s  agent 발화 끝
    44.66s  <ret> 발화 (turn11 첫 프레임)
    44.73s  agent 발화 시작: <ret> 아, 피처링 가수요? 잠시만요, 확인해 볼게요.
    44.91s  user  발화 끝
    46.10s  ⚡SPAN 주입 [d'=1.44s / d_lead=2.81s]: (tool result) Sirah, a singer and songwriter, is featured on the track
    47.17s  <ret> 발화 (turn12 첫 프레임)
    47.54s  agent 발화 끝
    47.56s  agent 발화 시작: <ret> 데미 로바토의 *Confident* 앨범에 참여한 피처링 가수는 시라(Sirah)라는 싱어송라이터
    49.17s  ⚡SPAN 주입(IRRELEVANT) [d'=2.00s / d_lead=8.02s]: [source: Encyclopedia Britannica] The giraffe is the tallest mammal on
    55.58s  agent 발화 끝
    55.60s  agent 발화 시작: 시라님은 데미 로바토와 함께 멋진 조화를 이루었던 것 같아요.
    59.17s  user  발화 시작: 아, 시라군요. 이름이 독특하네요.
    59.35s  agent 발화 끝
    61.89s  user  발화 끝
    61.95s  agent 발화 시작: 네, 시라님은 독특한 음색과 뛰어난 가창력으로 많은 사랑을 받고 있는 아티스트예요.
    67.50s  user  발화 시작: 데미 로바토의 다른 앨범들도 비슷한 스타일인가요?
    67.56s  agent 발화 끝
    71.01s  agent 발화 시작: 데미 로바토의 앨범들은 각기 다른 스타일을 보여주지만, *Confident* 앨범과 비슷한 분위기의 곡들도 
    71.14s  user  발화 끝
    74.71s  user  발화 시작: 예.
    75.33s  user  발화 끝
    78.01s  agent 발화 끝
    78.48s  user  발화 시작: 그렇군요. 알려주셔서 감사합니다.
    80.91s  user  발화 끝
    80.96s  agent 발화 시작: 천만에요. 데미 로바토의 음악을 즐겨 들으시고, 좋은 하루 보내세요.
    85.49s  agent 발화 끝
