# v3_rag_25_ko — 전 이벤트 시간순 타임라인 (L=agent/R=user)
# <ret>=agent 턴 첫 프레임(lead 첫 토큰 대체) · SPAN=lead 안 d' 지점(문장 중간 가능, Eq.3 sample_rag_delay)
# EXAMINER(FDB-v2) 단계: S1 안녕하세요. 잭 소크 선수랑 라파엘라 레지 선수에 대해 읽다가 | S2 와, 1919년이요! 그렇게 오래전부터 시작됐다는 건 몰랐어요 | S3 체키니 선수… 알겠습니다. 시대도 다르고, 파트너도 다르네요. | S4 음. 나쁘지 않네요. 승리 기록이군요. 그래도 뭔가 있네요. 

     0.00s  user  발화 시작: 안녕하세요. 잭 소크 선수랑 라파엘라 레지 선수에 대해 읽다가 두 분이 프로 선수로 활동했던 스포츠가 뭔지 
    11.49s  agent 발화 시작: 물론이죠, 가끔은 기억이 잘 안 날 때도 있으시죠. 한번 찾아볼까요?
    11.59s  user  발화 끝
    14.77s  <ret> 발화 (turn2 첫 프레임)
    15.10s  agent 발화 끝
    15.17s  agent 발화 시작: <ret> 좋은 질문이에요. 잭 소크 선수와 라파엘라 레지 선수 두 분 모두 프로 테니스 선수로 활동하셨습니
    15.97s  ⚡SPAN 주입 [d'=1.20s / d_lead=3.28s]: Jack Sock and Raffaella Reggi are both professional tennis players.
    16.88s  user  발화 시작: 네.
    17.51s  user  발화 끝
    20.63s  agent 발화 끝
    20.67s  user  발화 시작: 테니스군요. 잭 소크 선수는 농구도 했던 것 같기도 하고… 분명 그런 걸 읽었던 것 같은데요.
    27.80s  user  발화 끝
    28.23s  agent 발화 시작: 선수들을 헷갈릴 때가 있으시죠, 특히 다재다능한 선수들은요. 하지만 기록에 따르면 테니스가 그의 주된 활동이
    35.16s  <ret> 발화 (turn6 첫 프레임)
    35.32s  agent 발화 시작: <ret> 잭 소크 선수는 ATP 단식에서 4번 우승했고, 복식에서도 1번 우승했습니다.
    35.36s  agent 발화 끝
    36.68s  ⚡SPAN 주입 [d'=1.52s / d_lead=3.95s]: Jack Sock won four ATP titles in singles and one in doubles during his
    40.81s  user  발화 시작: 알겠습니다, 알겠습니다. 4번 우승이군요. 그런데 라파엘라 레지 선수는요? 저는 이름도 처음 들어봐요. 실력
    40.97s  agent 발화 끝
    49.43s  user  발화 끝
    49.53s  agent 발화 시작: [laugh] 모든 이름을 알 수는 없죠, 같은 스포츠 안에서도요. 꽤 괜찮은 선수였습니다.
    54.65s  <ret> 발화 (turn9 첫 프레임)
    55.05s  agent 발화 시작: <ret> 라파엘라 레지 선수의 업적을 한번 살펴볼까요. 라파엘라 레지 선수의 최고 단식 랭킹은 천구백팔십구
    55.13s  agent 발화 끝
    56.65s  ⚡SPAN 주입 [d'=2.00s / d_lead=4.27s]: Raffaella Reggi reached a career-high singles ranking of 16 in 1989.
    63.06s  agent 발화 끝
    63.12s  user  발화 시작: 16위요? 꽤 좋은데요! 그때는 톱 플레이어였던 거군요? 그런데… 테니스는 여성에게 비교적 최근에 인기 있는
    73.39s  agent 발화 시작: 흔히 오해하시는 부분입니다. 여성들은 수십 년 동안 테니스에서 높은 수준으로 경쟁해 왔습니다.
    73.59s  user  발화 끝
    79.00s  <ret> 발화 (turn12 첫 프레임)
    79.16s  agent 발화 시작: <ret> 여성 테니스 역사를 자세히 찾아볼까요. 수잔 랭글런 선수는 천구백십구 년에서 1925년 사이에 윔
    79.17s  agent 발화 끝
    81.00s  ⚡SPAN 주입 [d'=2.00s / d_lead=6.03s]: Suzanne Lenglen won six Wimbledon titles between 1919 and 1925.
    88.20s  agent 발화 끝
    89.12s  user  발화 시작: 와, 1919년이요! 그렇게 오래전부터 시작됐다는 건 몰랐어요. 하지만… 레지 선수, 소크 선수… 복식 경기
    99.12s  agent 발화 시작: 재미있는 질문이네요. 그럴 가능성이 있었는지 확인하려면 좀 더 자세히 알아봐야 할 것 같아요.
    99.28s  user  발화 끝
   104.45s  <ret> 발화 (turn15 첫 프레임)
   104.69s  agent 발화 시작: <ret> 두 분이 프로 복식 경기에 함께 출전한 기록은 없습니다.
   104.77s  agent 발화 끝
   105.81s  ⚡SPAN 주입 [d'=1.36s / d_lead=3.05s]: Jack Sock and Raffaella Reggi never partnered in a professional double
   107.74s  agent 발화 끝
   108.41s  user  발화 시작: 전혀 없나요? 단 한 번도 없나요? 그건… 놀랍네요. 테니스처럼 세계적인 스포츠인데, 언젠가는 같이 뛸 수도
   119.17s  user  발화 끝
   119.29s  agent 발화 시작: 가능성은 무궁무진하죠. 하지만 때로는 운이 좋지 않게도, 특정한 조합은 이루어지지 않기도 합니다.
   125.08s  <ret> 발화 (turn18 첫 프레임)
   125.39s  agent 발화 시작: <ret> 잭 소크 선수의 복식 파트너를 찾아볼까요. 바섹 포스필 선수가 잭 소크 선수와 가장 많이 복식 경
   125.40s  agent 발화 끝
   126.12s  ⚡SPAN 주입 [d'=1.04s / d_lead=3.57s]: Jack Sock’s most frequent doubles partner was Vasek Pospisil.
   130.97s  user  발화 시작: 그렇군요.
   131.79s  user  발화 끝
   132.53s  agent 발화 끝
   133.82s  user  발화 시작: 포스필 선수… 그 이름은 알겠네요. 좋아요, 소크 선수에게는 파트너가 있었군요. 레지 선수에게는 누가 있었나
   144.95s  user  발화 끝
   145.00s  agent 발화 시작: 정기적인 파트너를 찾아보면 두 분의 경력을 더 잘 이해할 수 있을 거예요.
   148.73s  <ret> 발화 (turn22 첫 프레임)
   149.07s  agent 발화 끝
   149.13s  agent 발화 시작: <ret> 라파엘라 레지 선수의 가장 잦은 복식 파트너를 찾아볼까요. 산드라 체키니 선수가 라파엘라 레지 선
   150.73s  ⚡SPAN 주입 [d'=2.00s / d_lead=3.50s]: Sandra Cecchini was Raffaella Reggi’s most frequent doubles partner.
   157.89s  agent 발화 끝
   157.93s  user  발화 시작: 체키니 선수… 알겠습니다. 시대도 다르고, 파트너도 다르네요. 이제 모든 게 이해가 되네요.
   165.35s  user  발화 끝
   165.53s  agent 발화 시작: 대부분은 시기와 상황에 따라 달라지는 것 같아요. 개인의 여정이라고 할 수 있죠.
   169.75s  <ret> 발화 (turn25 첫 프레임)
   169.93s  agent 발화 끝
   169.99s  agent 발화 시작: <ret> 두 분의 시대적 배경을 이해하는 것이 도움이 될 거예요. 라파엘라 레지 선수는 천구백구십삼 년에 
   171.75s  ⚡SPAN 주입 [d'=2.00s / d_lead=4.13s]: Raffaella Reggi retired from professional tennis in 1993.
   175.66s  user  발화 시작: 네.
   176.15s  user  발화 끝
   178.71s  agent 발화 끝
   178.85s  user  발화 시작: 1993년… 정말 오래됐네요. 소크 선수는 아직도 뛰고 있나요? 아니면 은퇴했나요?
   185.69s  agent 발화 시작: 잭 소크 선수는 아직도 활동하고 있지만, 최근 부상으로 어려움을 겪고 있습니다.
   185.80s  user  발화 끝
   189.29s  <ret> 발화 (turn29 첫 프레임)
   189.69s  agent 발화 시작: <ret> 잭 소크 선수의 가장 최근 토너먼트 출전 기록을 찾아볼까요. 잭 소크 선수의 가장 최근 토너먼트는
   189.84s  agent 발화 끝
   191.29s  ⚡SPAN 주입 [d'=2.00s / d_lead=3.45s]: Jack Sock last competed in the 2023 Atlanta Open.
   197.90s  agent 발화 끝
   198.29s  user  발화 시작: 애틀랜타… 좋아요. 아직 완전히 은퇴하지 않았군요. 다행이에요. 궁금했던 걸 알아서 기쁩니다.
   205.61s  user  발화 끝
   205.64s  agent 발화 시작: 확실해지는 건 좋은 일이죠. 때로는 세부 사항을 추적하는 것만으로도 마음의 평화를 얻을 수 있습니다.
   211.58s  <ret> 발화 (turn32 첫 프레임)
   211.76s  agent 발화 끝
   211.82s  agent 발화 시작: <ret> 각 선수의 독특한 여정을 존중하는 것도 중요합니다. 잭 소크 선수의 단식 기록은 148승 135패
   213.58s  ⚡SPAN 주입 [d'=2.00s / d_lead=4.37s]: Jack Sock has a career win-loss record of 148–135 in singles.
   216.92s  user  발화 시작: 네.
   217.56s  user  발화 끝
   219.38s  user  발화 시작: 음. 나쁘지 않네요. 승리 기록이군요. 그래도 뭔가 있네요. 수라 씨, 감사합니다.
   219.47s  agent 발화 끝
   225.49s  user  발화 끝
   225.68s  agent 발화 시작: 천만에요. 이러한 세부 사항을 기억하는 것은 그들의 헌신을 기리는 방법이 될 수 있습니다.
   230.47s  <ret> 발화 (turn36 첫 프레임)
   230.77s  agent 발화 끝
   230.79s  agent 발화 시작: <ret> 노력 뒤에 숨겨진 결과를 기억하는 것도 중요합니다. 라파엘라 레지 선수는 프로 선수 생활 동안 W
   231.67s  ⚡SPAN 주입 [d'=1.20s / d_lead=3.65s]: Raffaella Reggi won one WTA singles title during her career.
   239.00s  agent 발화 끝
   239.55s  user  발화 시작: 1번 우승… 그래도 우승은 우승이잖아요! 모든 승리는 소중한 거겠죠.
   245.18s  agent 발화 시작: 맞아요. 아무리 작더라도 모든 발걸음은 그들의 헌신을 보여주는 증거입니다.
   245.34s  user  발화 끝
   250.17s  <ret> 발화 (turn39 첫 프레임)
   250.25s  agent 발화 시작: <ret> 각자의 성공이 다르게 보일 수 있다는 점을 기억하는 것이 중요합니다. 잭 소크 선수는 이천십칠 년
   250.27s  agent 발화 끝
   252.17s  ⚡SPAN 주입 [d'=2.00s / d_lead=3.75s]: Jack Sock reached a career-high ranking of number eight in 2017.
   257.32s  user  발화 시작: 8위요! 정말 좋은데요. 좋아요, 이제 만족합니다. 감사합니다.
   257.38s  agent 발화 끝
   262.07s  agent 발화 시작: 천만에요. 모든 것을 더 잘 이해하신 것 같아서 정말 기쁩니다.
   262.18s  user  발화 끝
   266.09s  agent 발화 끝
