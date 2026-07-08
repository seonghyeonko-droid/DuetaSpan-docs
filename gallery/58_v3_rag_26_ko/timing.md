# v3_rag_26_ko — 전 이벤트 시간순 타임라인 (L=agent/R=user)
# <ret>=agent 턴 첫 프레임(lead 첫 토큰 대체) · SPAN=lead 안 d' 지점(문장 중간 가능, Eq.3 sample_rag_delay)

     0.00s  user  발화 시작: 음, 2차 세계 대전 관련해서 읽다가 궁금해졌어… 그때 일본은 무슨 정부 형태였어?
     6.24s  agent 발화 시작: 네, 좋은 질문이에요. 사실 역사와 전통에 깊이 뿌리박힌 꽤 복잡한 주제예요.
     6.39s  user  발화 끝
    12.31s  agent 발화 끝
    12.32s  user  발화 시작: 응, 당연히 그냥… 단순하진 않았겠지.
    15.29s  <ret> 발화 (turn3 첫 프레임)
    15.89s  agent 발화 시작: <ret> 뭐, 기본적으로… 일본 정부는 전쟁 중에 제국 헌법 군주제였어요.
    16.11s  user  발화 끝
    16.29s  ⚡SPAN 주입 [d'=1.00s / d_lead=1.22s]: Japan operated under an imperial constitutional monarchy during World 
    20.98s  user  발화 시작: 헌법 군주제… 영국 같은 거?
    21.40s  agent 발화 끝
    23.60s  agent 발화 시작: 꼭 그렇지는 않아요. 둘 다 군주가 있지만, 일본에서 황제의 역할은 상당히 달랐거든요.
    23.70s  user  발화 끝
    29.26s  <ret> 발화 (turn6 첫 프레임)
    29.85s  agent 발화 시작: <ret> 사실 정도의 차이에요… 황제는 막대한 권위를 가진 신성한 상징으로 여겨졌어요.
    30.05s  agent 발화 끝
    30.26s  ⚡SPAN 주입 [d'=1.00s / d_lead=3.72s]: The Emperor of Japan was considered a divine figurehead with significa
    36.06s  agent 발화 끝
    36.24s  user  발화 시작: 신성하다고? 와.
    37.76s  agent 발화 시작: 지금은 이해하기 어렵겠지만, 그 믿음이 그들의 정치 구조의 중심이었어요. 모든 것에 영향을 줬죠.
    37.94s  user  발화 끝
    45.23s  user  발화 시작: 그럼 민주주의였어, 아니면…?
    45.59s  agent 발화 끝
    47.17s  <ret> 발화 (turn10 첫 프레임)
    47.58s  user  발화 끝
    47.76s  agent 발화 시작: <ret> 민주적인 요소가 있었어요… 일본에는 의회인 국회가 있었지만, 권한이 제한적이었어요.
    48.17s  ⚡SPAN 주입 [d'=1.00s / d_lead=3.15s]: The Japanese Diet, a bicameral parliament, existed but held limited po
    54.63s  user  발화 시작: 권한이 제한적이라고… 그럼 누가 권력을 가졌는데?
    54.85s  agent 발화 끝
    58.00s  user  발화 끝
    58.14s  agent 발화 시작: 주로 군대였어요. 정부에 엄청난 영향력을 행사했죠.
    61.89s  <ret> 발화 (turn13 첫 프레임)
    62.40s  agent 발화 끝
    62.48s  agent 발화 시작: <ret> 좀 복잡하게 얽혀 있어요… 그 당시 군대와 해군이 정책 결정에 점점 더 큰 영향력을 행사했어요.
    62.89s  ⚡SPAN 주입 [d'=1.00s / d_lead=3.57s]: The Imperial Japanese Army and Navy increasingly dominated policy-maki
    70.09s  user  발화 시작: 그거 불안정해 보이는데.
    70.13s  agent 발화 끝
    71.93s  agent 발화 시작: 그렇죠. 군국주의의 부상은 상당한 내부 긴장을 조성했어요.
    71.94s  user  발화 끝
    76.79s  agent 발화 끝
    76.81s  agent 발화 시작: 네, 그거 생각나는데—
    77.83s  user  발화 시작: 근데 황제는 진짜 전쟁을 원했어, 아니면 그냥… 꼭두각시였어?
    78.56s  agent 발화 끝
    82.11s  agent 발화 시작: 그건 역사가들이 끊임없이 논쟁하는 질문이에요. 그의 실제 의지는 아직 불분명해요.
    82.32s  user  발화 끝
    87.64s  <ret> 발화 (turn19 첫 프레임)
    88.23s  agent 발화 시작: <ret> 정말 복잡한 문제예요… 히로히토의 전쟁 역할은 논쟁적인 역사적 주제예요.
    88.64s  ⚡SPAN 주입 [d'=1.00s / d_lead=3.52s]: Emperor Hirohito’s role in initiating and prosecuting the war remains 
    88.73s  agent 발화 끝
    94.57s  agent 발화 끝
    96.58s  user  발화 시작: 논란이 많네… 아무도 몰라?
    98.89s  user  발화 끝
    99.00s  agent 발화 시작: 양쪽을 뒷받침하는 증거가 있어요. 솔직히 말해서 미묘한 상황이에요.
   103.78s  <ret> 발화 (turn22 첫 프레임)
   104.37s  agent 발화 시작: <ret> 모든 증거를 해석하는 문제예요… 어떤 사람들은 히로히토가 확장을 지지했다고 믿고, 다른 사람들은 
   104.41s  agent 발화 끝
   104.78s  ⚡SPAN 주입 [d'=1.00s / d_lead=3.26s]: Some scholars argue Hirohito actively supported expansionism, while ot
   113.61s  agent 발화 끝
   113.86s  user  발화 시작: 흠. 흥미롭네. 그럼 군대가 그냥 알아서 다 결정했어?
   118.19s  agent 발화 시작: 많은 면에서 그렇다고 할 수 있어요. 특히 외교 정책과 관련해서 정부를 강력하게 장악하고 있었어요.
   118.25s  user  발화 끝
   125.51s  agent 발화 끝
