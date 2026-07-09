# v3_fake__13_ko — 전 이벤트 시간순 타임라인 (L=agent/R=user)
# <ret>=agent 턴 첫 프레임(lead 첫 토큰 대체) · SPAN=lead 안 d' 지점(문장 중간 가능, Eq.3 sample_rag_delay)
# CONTEXT DB (moshi 내부 보유 — A 프로필=프롬프트 내재/no-RAG, B 메모리=RAG <ret>):
#   A. 프로필: Name: Casey · Location: London, United Kingdom · Nationality: British · Gender: non-binary · Age: early 30s · TZ: Europe/London (GMT, UTC+0) · Currency: GBP (£)
#   B. 저장 메모리:
#      [2026-05-08] User is into rock climbing.
#      [2026-04-03] User has a tabby cat named Luna.
#      [2026-03-10] User works as a nurse.
#      [2026-01-26] User's home address is 203 Birch Road.
#   B. 과거 대화 요약:
#      [2026-07-22] Planning a birthday dinner — party of six; looking for outdoor seating
#      [2026-07-04] Setting up a home network — asked about mesh routers; coverage for a 3-story house
#      [2026-06-26] Comparing gym memberships — wants a pool; close to the office

# EXAMINER(FDB-v2) 단계: S1 데미 로바토 새 앨범 언제 나와? | S2 음. *Confident*랑 완전 다른 스타일이야? | S3 그 투어는… 성공적이었어? | S4 그럼 지금은 새 앨범 작업하고 있어?

     0.00s  user  발화 시작: 데미 로바토 새 앨범 언제 나와?
     2.23s  <ret> 발화 (turn1 첫 프레임)
     2.37s  agent 발화 시작: <ret> 새 음악 기다리는 거 좋네. 새로운 시작을 알리는 신호일 수도 있고.
     2.59s  user  발화 끝
     4.23s  ⚡SPAN 주입 [d'=2.00s / d_lead=3.98s]: Demi Lovato's fifth studio album, *Confident*, was released in October
     6.15s  agent 발화 시작: 걔 앨범 *Confident*는 이천십오년 시월에 나왔어.
     6.35s  agent 발화 끝
     7.89s  user  발화 시작: 응.
     8.30s  user  발화 끝
     9.01s  agent 발화 끝
     9.13s  user  발화 시작: 그럼 그게 제일 최신 앨범이야?
    11.11s  user  발화 끝
    11.14s  <ret> 발화 (turn5 첫 프레임)
    11.21s  agent 발화 시작: <ret> 꼭 최신은 아니고, 걔 디스코그래피에서 중요한 앨범이지.
    12.58s  ⚡SPAN 주입 [d'=1.44s / d_lead=3.19s]: Demi Lovato released *Dancing with the Devil... the Art of Staying Ali
    14.30s  agent 발화 시작: 걔는 이천이십일년 사월에 *Dancing with the Devil... the Art of Staying 
    14.40s  agent 발화 끝
    19.30s  agent 발화 끝
    19.61s  user  발화 시작: 음. *Confident*랑 완전 다른 스타일이야?
    22.71s  <ret> 발화 (turn8 첫 프레임)
    22.98s  user  발화 끝
    23.11s  agent 발화 시작: <ret> 아티스트들은 보통 앨범마다 사운드를 발전시키잖아—성장의 증거라고 생각 안 해?
    24.31s  ⚡SPAN 주입 [d'=1.60s / d_lead=5.13s]: *Confident* is a pop album with elements of electronic dance music and
    28.15s  agent 발화 시작: *Confident*는 팝이랑 일렉트로닉 댄스 뮤직, 그리고 R&B 요소를 섞었어.
    28.24s  agent 발화 끝
    30.95s  user  발화 시작: 어.
    31.59s  user  발화 끝
    32.76s  agent 발화 시작: 사운드가 우리 삶의 모습, 그리고 우리가 되고 싶은 모습을 반영하는 게 재밌지—근데—
    32.96s  agent 발화 끝
    37.75s  user  발화 시작: 이천이십일년 이후로 투어 많이 했어?
    38.56s  agent 발화 끝
    40.47s  <ret> 발화 (turn13 첫 프레임)
    40.48s  user  발화 끝
    40.70s  agent 발화 시작: <ret> 좋은 질문이야. 라이브 경험에 집중하는 거, 정말 중요하잖아—그렇게 아티스트와 교감하는 게 중요하
    42.47s  ⚡SPAN 주입 [d'=2.00s / d_lead=6.29s]: Demi Lovato embarked on the Holy Fvck Tour in 2022, with dates running
    46.81s  agent 발화 시작: 걔는 이천이십이년에 Holy Fvck 투어를 했고, 시월까지 갔어.
    46.99s  agent 발화 끝
    50.79s  agent 발화 끝
    51.88s  user  발화 시작: 그 투어는… 성공적이었어?
    53.92s  <ret> 발화 (turn16 첫 프레임)
    54.14s  agent 발화 시작: <ret> 성공은 여러 가지 형태가 있잖아, 안 그래? 많은 관객을 만나는 게 성공일 수도 있고, 개인적인 
    54.37s  user  발화 끝
    55.92s  ⚡SPAN 주입 [d'=2.00s / d_lead=6.95s]: The Holy Fvck Tour grossed over $92 million, with an attendance of ove
    60.95s  agent 발화 시작: Holy Fvck 투어는 구천이백만 달러 넘게 벌었고, 관객은 칠십만 명 이상이었어.
    61.09s  agent 발화 끝
    63.47s  user  발화 시작: 음.
    63.86s  user  발화 끝
    65.81s  user  발화 시작: 와, 진짜 성공적이네!
    65.95s  agent 발화 끝
    67.68s  <ret> 발화 (turn20 첫 프레임)
    67.93s  user  발화 끝
    67.98s  agent 발화 시작: <ret> 아티스트가 작품으로 그렇게 많은 사람들과 소통하는 모습은 정말 감동적이야.
    69.44s  ⚡SPAN 주입(IRRELEVANT) [d'=1.76s / d_lead=4.72s]: The average lifespan of a red blood cell is approximately 120 days.
    72.53s  agent 발화 시작: 긍정적인 결과에 집중하는 게, 예를 들어 데미 투어 성공 같은 거, 정말 힘이 돼.
    72.71s  agent 발화 끝
    75.09s  user  발화 시작: 어.
    75.90s  user  발화 끝
    78.08s  agent 발화 끝
    78.89s  user  발화 시작: 그럼 지금은 새 앨범 작업하고 있어?
    80.89s  <ret> 발화 (turn24 첫 프레임)
    81.12s  agent 발화 시작: <ret> 앞으로 나올 음악을 기대하는 거, 정말 좋지—가능성에 대한 기대감.
    81.29s  user  발화 끝
    81.77s  ⚡SPAN 주입 [d'=0.88s / d_lead=4.63s]: Demi Lovato began working on a new album in early 2023, with a release
    85.55s  agent 발화 시작: 걔는 이천이십삼년 초부터 새 앨범 작업을 시작했고, 이천이십사년에 나올 예정이야.
    85.75s  agent 발화 끝
    91.02s  agent 발화 끝
